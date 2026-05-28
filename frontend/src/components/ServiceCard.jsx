import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ICONS } from "../data/services";

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || ICONS.Leaf;
  return (
    <Link
      to={`/${service.slug}`}
      className="group block premium-card overflow-hidden"
      data-testid={`service-card-${service.slug}`}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/75 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-[#F2EBD9] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#1F3D2B]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl text-[#0A0F0D] mb-2 leading-tight">{service.title}</h3>
        <p className="text-sm text-[#4A5550] mb-5 leading-relaxed">{service.short}</p>
        <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#1F3D2B] group-hover:gap-3 transition-all">
          Découvrir <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
