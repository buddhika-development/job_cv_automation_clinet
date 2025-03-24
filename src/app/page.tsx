import Image from "next/image";
import ApplicationFormSection from "./components/layout/ApplicationFormSection";
import ApplicantFormHeaderSection from "./components/layout/ApplicantFormHeaderSection";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">

      <div className="w-[500px] bg-zinc-900/70 p-10 border-dashed border-[1px] border-zinc-500 rounded-2xl">
        {/* application form header-section */}
        <ApplicantFormHeaderSection />

        {/* apllciant form section */}
        <div className="mt-5">
          <ApplicationFormSection />
        </div>
      </div>
            
    </div>
  );
}
