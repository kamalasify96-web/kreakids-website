// One place for everything the client may need to change.
export const site = {
  name: "KreaKid's",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kreakids.sa",
  phoneDisplay: "054 601 0476",
  phoneIntl: "+966 54 601 0476",
  phoneHref: "tel:+966546010476",
  whatsapp: "966546010476",
  instagram: "kreakids.sa",
  instagramUrl: "https://instagram.com/kreakids.sa",
  salla: "https://salla.sa/kreakids",
  // Flip to true once the Salla store is live again. Controls the Shop page + home teaser copy.
  shopOpen: false,
  // TODO confirm with client: street address as written on their Instagram profile.
  address: {
    en: "8153 Prince Sultan St, 5152 Al Basateen, Jeddah 23717, Saudi Arabia",
    ar: "٨١٥٣ الأمير سلطان، ٥١٥٢ البساتين، جدة ٢٣٧١٧، المملكة العربية السعودية",
  },
  mapEmbed: "https://www.google.com/maps?q=Prince+Sultan+Al+Basateen+Jeddah+23717&output=embed",
  followers: "4K+",
};

export function waLink(text = "") {
  return `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}
