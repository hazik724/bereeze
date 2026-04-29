import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("cv") as File;

    // 1️⃣ Upload file
    const asset = await client.assets.upload("file", file);

    // 2️⃣ Create document
    await client.create({
      _type: "application",
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      jobTitle: formData.get("jobTitle"),
      message: formData.get("message"),

      cv: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}