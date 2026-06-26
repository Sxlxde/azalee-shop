export interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  lat: number;
  lng: number;
  directions: string;
}

export const stores: Store[] = [
  {
    id: "toulouse",
    name: "Azalée Toulouse",
    city: "Toulouse",
    address: "12 rue Saint-Rome, 31000 Toulouse",
    hours: "Lun-Sam : 10h-19h",
    phone: "05 61 00 00 12",
    lat: 43.6018,
    lng: 1.4434,
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=12+rue+Saint-Rome+31000+Toulouse",
  },
  {
    id: "agen",
    name: "Azalée Agen",
    city: "Agen",
    address: "8 boulevard de la République, 47000 Agen",
    hours: "Mar-Sam : 10h-18h30",
    phone: "05 53 00 00 47",
    lat: 44.2032,
    lng: 0.6157,
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=8+boulevard+de+la+R%C3%A9publique+47000+Agen",
  },
];
