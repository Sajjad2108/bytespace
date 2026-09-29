import Image from "next/image";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const background = {
  backgroundImage: [
    "radial-gradient(circle at 38% 12%, rgb(212 251 32 / 0.38), transparent 24%)",
    "radial-gradient(circle at 100% 0%, rgb(212 251 32 / 0.3), transparent 30%)",
    "radial-gradient(circle at 0% 100%, rgb(0 59 226 / 0.16), transparent 30%)",
  ].join(","),
};

export function Testimonials() {
  return (
    <section className="bg-[#f7f8fb] pb-16 pt-20 lg:pb-[60px] lg:pt-[110px]" style={background}>
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            title={
              <>
                Discover What Our <br className="hidden sm:block" />
                Community Is Saying
              </>
            }
          />
          <p className="text-base leading-relaxed text-muted sm:text-lg lg:pl-[60px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:mt-[70px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="rounded-[20px] bg-white p-6 shadow-[0_10px_40px_-20px_rgb(16_24_64/0.2)]">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <figcaption className="mt-6">
                  <p className="font-display text-xl font-semibold text-ink">{t.name}</p>
                  <p className="mt-1 text-base text-primary">{t.role}</p>
                </figcaption>
                <blockquote className="mt-6 text-base leading-[1.7] text-body sm:text-lg">
                  &quot;{t.quote}&quot;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
