import ConsultingCard from './ConsultingCard';
import { consultingOfferings } from '../../data/consultingOfferings';

function RetainerOfferings() {
  const retainerOffering = consultingOfferings.find(o => o.title === "Fractional Marketing Lead");

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6">Retainer Based Offerings</h2>
      {retainerOffering && <ConsultingCard {...retainerOffering} />}
    </section>
  );
}

export default RetainerOfferings;