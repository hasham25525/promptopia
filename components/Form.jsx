import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit, }) => {


  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing promts with the world, and let your imagination run wild with any AI-powerd plateform.
        Please fill in the form below to create a new Promp.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-full flex flex-col gap-7 glassmorphism"
      >
        {/* textarea */}
        <label >
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt{` `}
          </span><span className="text-primary-orange text-2xl">
              *
            </span>

          <textarea
            placeholder="Write your prompt here..."
            value={post.prompt}
            required
            className="form_textarea"
            onChange={(e) => setPost({
              ...post, prompt: e.target.value
            })}
          />
        </label>

        {/* tag */} 
        <label >
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{` `}
            <span className="font normal">
              (#product, #webdevelopement, #idea){` `}
            </span>
            <span className="text-primary-orange text-2xl">
              *
            </span>
          </span>

          <input
            placeholder="#tag"
            value={post.tag}
            required
            className="form_input"
            onChange={(e) => setPost({
              ...post, tag: e.target.value
            })}
          />
        </label>

        {/* cancel and submit buttons */}
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" type='submit' disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>

    </section>
  )
}

export default Form