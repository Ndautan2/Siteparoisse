import { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { clochersData } from '@/data/clochersData';

const LOCATIONS = Object.values(clochersData).map(c => `${c.churchName} — ${c.name}`);

const LocationAutocomplete = ({ value, onChange, placeholder, required, testId }) => {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleChange = (val) => {
    onChange(val);
    if (val.length > 0) {
      const lower = val.toLowerCase();
      setFiltered(LOCATIONS.filter(l => l.toLowerCase().includes(lower)));
      setOpen(true);
    } else {
      setFiltered(LOCATIONS);
      setOpen(true);
    }
  };

  const handleSelect = (loc) => {
    onChange(loc);
    setOpen(false);
  };

  const handleFocus = () => {
    if (value.length > 0) {
      const lower = value.toLowerCase();
      setFiltered(LOCATIONS.filter(l => l.toLowerCase().includes(lower)));
    } else {
      setFiltered(LOCATIONS);
    }
    setOpen(true);
  };

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          placeholder={placeholder || "Tapez pour rechercher un lieu..."}
          required={required}
          className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
          data-testid={testId}
        />
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filtered.map((loc, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(loc)}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gold/10 hover:text-gold transition-colors border-b border-slate-50 last:border-0"
            >
              <MapPin className="inline w-3 h-3 mr-2 text-slate-400" />
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
