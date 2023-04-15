import Image from "next/image";
import React from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";

const BookClub = () => {
  return (
    <div>
      {/* card */}

      <div className="flex items-center bg-gray-200 shadow-md w-70vw mx-auto my-4">
        {/* div for image */}
        <div className="w-1/3 ml-4">
          <Image
            src={
              "https://imgs.search.brave.com/Wigg6Klx55WOPadgxWxb3lVEnGvKZOIxY7ibjlVKvTo/rs:fit:465:250:1/g:ce/aHR0cHM6Ly9idXR0/ZXJjbXMuY29tL3N0/YXRpYy9pbWFnZXMv/dGVjaF9iYW5uZXJz/L05leHRqcy5iOGE3/MTczMjJjMDgucG5n"
            }
            alt={"kahlid Hosseini novel"}
            width={100}
            height={100}
          />
          {/* image */}
        </div>

        {/* div for description and name */}
        <div className="w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-4">
            <FirstLetterCapital letter="B" />
            ook <FirstLetterCapital letter="N" />
            ame
          </h2>
          <h6 className="text-lg mb-4">
            <FirstLetterCapital letter="A" />
            uthor <FirstLetterCapital letter="N" />
            ame
          </h6>
          <h5 className="text-lg mb-4">review</h5>
          <button className="bg-[#2C1810] hover:bg-[#DA8E63] text-white font-bold py-2 px-4 rounded">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookClub;
