import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { v2 } from 'cloudinary';
import { z } from 'zod';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const gallery_get = defineEventHandler(async () => {
  v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  const result = await v2.api.resources({
    type: "upload",
    prefix: "clicks/",
    max_results: 100
  });
  const schema = z.object({
    resources: z.array(
      z.object({
        public_id: z.string(),
        width: z.number(),
        height: z.number()
      })
    )
  });
  return {
    resources: schema.parse(result).resources.sort((a, b) => {
      return a.public_id.localeCompare(b.public_id);
    })
  };
});

export { gallery_get as default };
//# sourceMappingURL=gallery.get.mjs.map
