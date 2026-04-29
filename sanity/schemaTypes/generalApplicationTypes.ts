import { defineField, defineType } from "sanity";

export const generalApplicationType = defineType({
  name: "generalApplication",
  title: "General Applications",
  type: "document",

  fields: [
    // 🔹 NAME
    defineField({
      name: "fullName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "surname",
      title: "Surname",
      type: "string",
    }),

    // 🔹 CONTACT
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

    // 🔹 JOB INFO
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

    // 🔹 PERSONAL DETAILS
    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
    }),

    // 🔹 PASSPORT
    defineField({
      name: "passportNumber",
      title: "Passport Number",
      type: "string",
    }),
    defineField({
      name: "passportIssueDate",
      title: "Passport Issue Date",
      type: "date",
    }),
    defineField({
      name: "passportExpiryDate",
      title: "Passport Expiry Date",
      type: "date",
    }),

    // 🔹 EXPERIENCE
    defineField({
      name: "experienceType",
      title: "Experience",
      type: "string",
      options: {
        list: [
          { title: "Fresher", value: "fresher" },
          { title: "Gulf Return", value: "gulf_return" },
        ],
        layout: "radio",
      },
    }),

    // 🔹 MESSAGE
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),

    // 🔹 CV
    defineField({
      name: "cv",
      title: "CV",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),

    // 🔥 OPTIONAL (HIGH VALUE)
    defineField({
      name: "passportImage",
      title: "Passport Image",
      type: "image",
    }),

    // 🔹 TIME
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