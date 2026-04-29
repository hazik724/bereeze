import { defineField, defineType } from "sanity";

export const applicationType = defineType({
  name: "application",
  title: "Applications",
  type: "document",

  fields: [
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({ name: "surname", title: "Surname", type: "string" }),

    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),

    defineField({ name: "jobTitle", title: "Job Title", type: "string" }),

    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
    }),

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

    defineField({
      name: "experienceType",
      title: "Experience",
      type: "string",
      options: {
        list: [
          { title: "Fresher", value: "fresher" },
          { title: "Gulf Return", value: "gulf_return" },
        ],
        layout: "radio", // nice UI in Sanity
      },
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),

    defineField({
      name: "cv",
      title: "Upload CV",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});