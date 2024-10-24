import CurrencyTable from '../components/CurrencyTable';
import CurrencyCharts from '../components/ui/CurrencyCharts';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Dashboard de Moedas</h1>
        <CurrencyTable />
        <div className="mt-8">
          <CurrencyCharts />
        </div>
      </div>
    </div>
  );
}