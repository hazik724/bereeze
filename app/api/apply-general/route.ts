import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("cv") as File;

    // upload CV
    const asset = await client.assets.upload("file", file);

    // create general application
    await client.create({
      _type: "generalApplication",
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      country: formData.get("country"),
      jobTitle: formData.get("jobTitle"),
      message: formData.get("message"),
      createdAt: formData.get("appliedAt"),

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