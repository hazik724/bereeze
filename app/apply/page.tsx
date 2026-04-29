import ApplyGeneralForm from "@/components/GenralApplyForm";

export default function ApplyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      
      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-[#0B1220]">
        General Job Application
      </h1>

      <p className="text-[#0B1220]/60 mt-2">
        Apply once and we will match you with suitable overseas jobs.
      </p>

      {/* FORM */}
      <div className="mt-10">
        <ApplyGeneralForm />
      </div>
    </div>
  );
}