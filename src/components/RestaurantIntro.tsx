import { PlaceholderImage } from "@/components/PlaceholderImage";
import { IconBolt, IconLeaf, IconClock, IconMapPin } from "@/components/icons";

const values = [
  {
    icon: IconLeaf,
    title: "Quality ingredients",
    description: "Sourced fresh and prepared with care, every single day.",
  },
  {
    icon: IconClock,
    title: "Made daily",
    description: "Nothing sits around — our menu is prepared fresh each morning.",
  },
  {
    icon: IconBolt,
    title: "Fast lunch service",
    description: "Quick without rushing, so your break stays your own.",
  },
  {
    icon: IconMapPin,
    title: "Proudly local",
    description: "An independent shop, rooted in the Asquith community.",
  },
];

export function RestaurantIntro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-5 lg:px-8 lg:py-28">
        {/* On smaller-than-desktop screens this heading renders above the
            image (natural DOM order); at lg+ it's placed into the top of
            the right-hand column instead. */}
        <div className="lg:col-start-2 lg:row-start-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Honest lunch, done properly.
          </h2>
        </div>

        <PlaceholderImage
          icon={IconLeaf}
          label="Photo of fresh ingredients being prepared in the kitchen"
          tone="primary"
          className="aspect-[4/3] w-full lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:aspect-auto lg:h-full"
        />

        <div className="lg:col-start-2 lg:row-start-2">
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            Salisbury Lunchbox started with a simple idea: lunch should be
            quick, but it shouldn&apos;t feel rushed. We prepare everything
            fresh in-house each morning, using quality ingredients from
            trusted local suppliers — so what you get is a proper meal, made
            for the middle of a busy day.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <dt className="font-display text-base font-semibold text-ink">
                    {title}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">
                    {description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
