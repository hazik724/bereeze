import { defineField, defineType } from "sanity";

export const applicationType = defineType({
  name: "application",
  title: "Applications",
  type: "document",

  fields: [
    defineField({ name: "fullName", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "jobTitle", type: "string" }),
    defineField({ name: "message", type: "text" }),

    defineField({
      name: "cv",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});