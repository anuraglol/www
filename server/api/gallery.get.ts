export const runtime = "edge";

import { z } from "zod";

const ResourceSchema = z.object({
  resources: z.array(
    z.object({
      public_id: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  ),
});

export default defineEventHandler(async () => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw createError({ statusCode: 500, message: "Missing Cloudinary config" });
  }

  const credentials = btoa(`${apiKey}:${apiSecret}`);
  const params = new URLSearchParams({
    type: "upload",
    prefix: "clicks/",
    max_results: "100",
  });

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?${params}`,
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    },
  );

  if (!res.ok) {
    throw createError({
      statusCode: res.status,
      message: `Cloudinary error: ${res.statusText}`,
    });
  }

  const json = await res.json();
  const parsed = ResourceSchema.safeParse(json);

  if (!parsed.success) {
    throw createError({
      statusCode: 502,
      message: "Unexpected Cloudinary response shape",
    });
  }

  return {
    resources: parsed.data.resources.sort((a, b) => a.public_id.localeCompare(b.public_id)),
  };
});
