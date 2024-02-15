import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-[#262626]`}>Hi, I am Ezgi</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop applications and user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
