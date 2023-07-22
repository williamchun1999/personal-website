import profilePhoto from "../assets/DSC02531.jpg"

export const Banner = () => {
  return (
    <main id="banner" className="mt-32 py-16 flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between items-center">
        <div className="flex flex-col mr-24">
          <h2 className="text-3xl font-bold mb-2 text-light-blue">William Chun</h2>
          <span className="text-3xl font-bold mb-4">Software Developer</span>
          <p>I like writing code, trying new music, and connecting with people!</p>
          <p>Reach out to me and tell me your favorite song ontop :)</p>
        </div>

        <img src={profilePhoto} alt="Profile Picture" className="h-80 border-light-blue border-4" />
      </div>
    </main>
  )
}
