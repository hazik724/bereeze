import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // 🔹 Safe helpers (prevents null bugs)
    const getValue = (key: string) =>
      (formData.get(key) || "").toString();

    // 🔹 File upload (CV)
    const file = formData.get("cv") as File;
    let asset = null;

    if (file && file.size > 0) {
      asset = await client.assets.upload("file", file);
    }

    // 🔹 Create document
    await client.create({
      _type: "generalApplication",

      // BASIC INFO
      fullName: getValue("fullName"),
      surname: getValue("surname"),
      phone: getValue("phone"),
      email: getValue("email"),

      // JOB INFO
      country: getValue("country"),
      jobTitle: getValue("jobTitle"),
      message: getValue("message"),

      // PERSONAL INFO
      dateOfBirth: getValue("dateOfBirth"),

      // PASSPORT INFO
      passportNumber: getValue("passportNumber"),
      passportIssueDate: getValue("passportIssueDate"),
      passportExpiryDate: getValue("passportExpiryDate"),

      // EXPERIENCE
      experienceType: getValue("experienceType"),

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

      // OPTIONAL IMAGE
      // (only works if you send it from form later)
      // passportImage can be added later if needed

      // TIMESTAMP (FIXED)
      createdAt: new Date().toISOString(),
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("GENERAL APPLICATION ERROR:", err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}