import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // 🔹 File
    const file = formData.get("cv") as File;
    let asset = null;

    if (file && file.size > 0) {
      asset = await client.assets.upload("file", file);
    }

    // 🔹 Create document
    await client.create({
      _type: "application",

      // BASIC
      fullName: formData.get("fullName"),
      surname: formData.get("surname"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      jobTitle: formData.get("jobTitle"),
      message: formData.get("message"),

      // NEW FIELDS
      dateOfBirth: formData.get("dateOfBirth"),
      passportNumber: formData.get("passportNumber"),
      passportIssueDate: formData.get("passportIssueDate"),
      passportExpiryDate: formData.get("passportExpiryDate"),
      experienceType: formData.get("experienceType"),

      // FILE
      ...(asset && {
        cv: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
      }),

      // TIMESTAMP
      createdAt: new Date().toISOString(),
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("APPLICATION ERROR:", err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}