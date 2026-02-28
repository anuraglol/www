import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";

export default defineEventHandler(async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: "clicks/",
    max_results: 100,
  });

  const schema = z.object({
    resources: z.array(
      z.object({
        public_id: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    ),
  });

  return {
    resources: schema.parse(result).resources.sort((a, b) => {
      return a.public_id.localeCompare(b.public_id);
    }),
  };
});
