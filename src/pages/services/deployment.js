import React from "react"
import { services } from "../../data/site"
import ServiceDetail from "../../components/service-detail"
import Seo from "../../components/seo"

const slug = "deployment"
const idx = services.findIndex((s) => s.slug === slug)
const service = services[idx]
const prevService = services[(idx - 1 + services.length) % services.length]
const nextService = services[(idx + 1) % services.length]

const ServicePage = () => (
  <ServiceDetail service={service} prevService={prevService} nextService={nextService} />
)

export default ServicePage

export const Head = () => (
  <Seo
    title={`${service.title} Services`}
    description={service.longDesc}
    pathname={`/services/${service.slug}/`}
  />
)
