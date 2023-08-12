import PromptCard from "./PromptCard";
import Link from "next/link";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data);
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Prompts</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      {
        data.length == 0
          ? <div className='mt-10 '>
            <p className=" text-primary-orange">No Prompts to show...</p>
             <div className="mt-4 ">
             <Link href="/create-prompt"
              className="black_btn w-40">
              Create Prompt ?
            </Link>
             </div>

          </div>
          : <div className='mt-10 prompt_layout'>
            {data.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ))}
          </div>
      }
    </section>
  );
};

export default Profile;