import { defineField, defineType } from "sanity";

export const generalApplicationType = defineType({
  name: "generalApplication",
  title: "General Applications",
  type: "document",

  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "country",
      title: "Preferred Country",
      type: "string",
    }),

    defineField({
      name: "jobTitle",
      title: "Job Preference",
      type: "string",
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),

    defineField({
      name: "cv",
      title: "CV",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),

    defineField({
      name: "createdAt",
      title: "Applied At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "fullName",
      subtitle: "jobTitle",
    },
  },
});