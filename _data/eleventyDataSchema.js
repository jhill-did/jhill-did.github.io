import { z } from "zod";

export default function() {
  return function(data) {
    const result = z.object({
      draft: z.optional(z.boolean())
    }).safeParse(data);

    if (result.error) {
      throw new Error(z.prettifyError(result.error));
    }
  };
}
