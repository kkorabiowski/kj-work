import { FilterItem } from './filter-item';

const filters = [
  {
    groupLabel: 'Tryb zatrudnienia',
    items: [
      { label: 'Full-time', value: 'full-time' },
      { label: 'Part-time', value: 'part-time' },
      { label: 'Contract', value: 'contract' },
    ],
  },
  {
    groupLabel: 'Branża',
    items: [
      { label: 'Budownictwo', value: 'Budownictwo' },
      { label: 'Transport', value: 'Transport' },
      { label: 'Gastronomia', value: 'Gastronomia' },
      { label: 'IT', value: 'IT' },
    ],
  },
];

export const OffersFilters = () => (
  <div className="w-80 space-y-3">
    <h3>Filtry</h3>
    {filters.map(({ groupLabel, items }) => (
      <div key={groupLabel} className="space-y-2">
        <h6>{groupLabel}</h6>
        {items.map(({ label, value }) => (
          <FilterItem key={value} label={label} value={value} />
        ))}
      </div>
    ))}
  </div>
);
