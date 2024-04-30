"use client";

type BoardCardProps = {
  title: string;
  board_img: string;
  board_id: number;
};

const BoardCard = (props: BoardCardProps) => {

  return (
    
    <div className="w-72">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image section */}
      <div
        className="bg-cover bg-center h-28 w-full"
        style={{ backgroundImage: `url(${props.board_img})` }} // Inline style using template literals for imageUrl
      >
      </div>
      {/* Text section */}
      <div className="p-4 h-28">
        <h1 className="text-gray-900 font-bold text-2xl">{props.title}</h1>
        
      </div>
    </div>
  </div>
  );
};

export default BoardCard;
