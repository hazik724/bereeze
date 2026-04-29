// sanity/schema/jobTypes.ts

import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Job",
  type: "document",

  fields: [
    // 🧭 SLUG (IMPORTANT for dynamic pages)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🧾 BASIC INFO
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
      options: {
        list: ["UAE", "Saudi Arabia", "Qatar", "Pakistan"],
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🖼️ JOB IMAGE (VERY IMPORTANT FOR TRUST)
    defineField({
      name: "image",
      title: "Job Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "salary",
      title: "Salary Range",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "requirements",
      title: "Requirements",
      type: "text",
    }),

    // 📩 APPLY SYSTEM (IMPORTANT)


    defineField({
      name: "applyEmail",
      title: "Apply Email",
      type: "string",
      hidden: ({ parent }) => parent?.applyMethod !== "email",
    }),

    defineField({
      name: "applyLink",
      title: "External Apply Link",
      type: "url",
      hidden: ({ parent }) => parent?.applyMethod !== "link",
    }),

    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      hidden: ({ parent }) => parent?.applyMethod !== "whatsapp",
    }),

    defineField({
      name: "postedAt",
      title: "Posted Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      company: "company",
      country: "country",
      media: "image",
    },
    prepare(selection) {
      const { title, company, country, media } = selection;
      return {
        title,
        subtitle: `${company} • ${country}`,
        media,
      };
    },
  },
});