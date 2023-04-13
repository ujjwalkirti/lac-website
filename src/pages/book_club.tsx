import Image from "next/image";
import React from "react";

const BookClub = () => {
  return (
    <div>
      {/* card */}

      <div>
        {/* div for image */}
        <div>
          <Image
            src={
              "https://imgs.search.brave.com/Wigg6Klx55WOPadgxWxb3lVEnGvKZOIxY7ibjlVKvTo/rs:fit:465:250:1/g:ce/aHR0cHM6Ly9idXR0/ZXJjbXMuY29tL3N0/YXRpYy9pbWFnZXMv/dGVjaF9iYW5uZXJz/L05leHRqcy5iOGE3/MTczMjJjMDgucG5n"
            }
            alt={"kahlid Hosseini novel"} width={100} height={100}
          />
          {/* image */}
        </div>

        {/* div for description and name */}
        <div>
          <h3>Book Name</h3>
          <h6>Author Name</h6>
          <h5>review</h5>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default BookClub;
