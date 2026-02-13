import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface ReservationSectionProps {
  t: Translations;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
}

const ReservationSection: React.FC<ReservationSectionProps> = ({ t }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  const validate = (form: HTMLFormElement): FormErrors => {
    const newErrors: FormErrors = {};

    // Name: only letters, spaces, hyphens, apostrophes
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    if (!name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё\s'-]+$/.test(name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Phone: strip non-digit characters, then check for at least 10 digits
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const digits = phone.replace(/\D/g, '');
    if (!phone) {
      newErrors.phone = 'Phone is required';
    } else if (digits.length < 11) {
      newErrors.phone = 'Phone must have at least 11 digits (after country code)';
    }

    // Date: cannot be in the past
    const date = (form.elements.namedItem('date') as HTMLInputElement).value;
    if (!date) {
      newErrors.date = 'Date is required';
    } else if (date < today) {
      newErrors.date = 'Date cannot be in the past';
    }

    return newErrors;
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="reservation" className="py-32 relative flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-qazan-ruby/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="glass-panel p-10 md:p-20 rounded-[4rem] border border-white/10 text-center bg-black/60 backdrop-blur-xl shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white">{t.reservation.title}</h2>
            <p className="text-qazan-ruby text-sm md:text-base uppercase tracking-widest mb-16 font-semibold">{t.reservation.subtitle}</p>

            {formStatus === 'success' ? (
              <div className="p-12 bg-qazan-ruby/10 border border-qazan-ruby text-qazan-ruby rounded-2xl animate-in fade-in zoom-in duration-500">
                <p className="font-serif italic text-3xl mb-4">{t.reservation.success_title}</p>
                <p className="text-lg text-white/60">We will call you shortly to confirm.</p>
                <button onClick={() => { setFormStatus('idle'); setErrors({}); }} className="mt-8 text-sm uppercase tracking-widest text-white underline font-bold">New Booking</button>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-12 text-center" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input
                      type="text"
                      id="name"
                      required
                      onChange={() => errors.name && setErrors(prev => ({ ...prev, name: undefined }))}
                      className={`w-full bg-transparent border-b py-4 text-white text-lg focus:outline-none transition-colors placeholder-transparent peer text-center ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-qazan-ruby'}`}
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-1/2 -translate-x-1/2 -top-4 text-white/50 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-qazan-ruby whitespace-nowrap">
                      {t.reservation.label_name}
                    </label>
                    {errors.name && <p className="absolute -bottom-6 left-0 w-full text-red-400 text-xs text-center">{errors.name}</p>}
                  </div>
                  <div className="group relative">
                    <input
                      type="tel"
                      id="phone"
                      required
                      onChange={() => errors.phone && setErrors(prev => ({ ...prev, phone: undefined }))}
                      className={`w-full bg-transparent border-b py-4 text-white text-lg focus:outline-none transition-colors placeholder-transparent peer text-center ${errors.phone ? 'border-red-500' : 'border-white/20 focus:border-qazan-ruby'}`}
                      placeholder="Phone"
                    />
                    <label htmlFor="phone" className="absolute left-1/2 -translate-x-1/2 -top-4 text-white/50 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-qazan-ruby whitespace-nowrap">
                      {t.reservation.label_phone}
                    </label>
                    {errors.phone && <p className="absolute -bottom-6 left-0 w-full text-red-400 text-xs text-center">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input
                      type="date"
                      id="date"
                      required
                      min={today}
                      onChange={() => errors.date && setErrors(prev => ({ ...prev, date: undefined }))}
                      className={`w-full bg-transparent border-b py-4 text-white text-lg focus:outline-none transition-colors color-white ${errors.date ? 'border-red-500' : 'border-white/20 focus:border-qazan-ruby'}`}
                    />
                    {errors.date && <p className="absolute -bottom-6 left-0 w-full text-red-400 text-xs text-center">{errors.date}</p>}
                  </div>
                  <div className="group relative">
                    <select id="guests" className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-qazan-ruby transition-colors appearance-none cursor-pointer text-center">
                      <option value="1" className="bg-qazan-black text-gray-400">1 {t.reservation.label_guests}</option>
                      <option value="2" className="bg-qazan-black text-gray-400">2 {t.reservation.label_guests}</option>
                      <option value="3" className="bg-qazan-black text-gray-400">3 {t.reservation.label_guests}</option>
                      <option value="4" className="bg-qazan-black text-gray-400">4+ {t.reservation.label_guests}</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-0 top-5 text-white/30 pointer-events-none" />
                  </div>
                </div>

                <div className="pt-10 text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="bg-qazan-gold hover:bg-white text-black px-16 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-qazan-gold/50"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : t.reservation.btn_submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ReservationSection;
