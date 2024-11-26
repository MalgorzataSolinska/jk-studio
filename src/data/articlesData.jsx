import { useTranslation } from 'react-i18next';
import {Stack, Text} from '@chakra-ui/react'

const Articles = () => {
  const { t } = useTranslation();

const articles = [
  {
    id: 1,
    title: t('blog.procedure'),
    date: '2024-07-27',
    image: '/images/Jana-kosmetyki.png',
    content: (
      <Stack spacing={4}>
        <Text mb={4}>
          Dlaczego warto skorzystać z depilacji pastą cukrową w JK Studio?
        </Text>
        <Text mb={4}>
          Depilacja pastą cukrową to coraz bardziej popularna metoda usuwania owłosienia, która cieszy się uznaniem wśród wielu osób. Dlaczego warto rozważyć tę technikę? Oto kilka powodów, dla których depilacja pastą cukrową w naszym salonie JK Studio ma przewagę nad innymi metodami usuwania owłosienia.
        </Text>
        <Text fontWeight='bold'>1. Profesjonalna obsługa</Text>
        <Text mb={4}>
          W JK Studio zapewniamy wykwalifikowanych specjalistów, którzy posiadają wiedzę i doświadczenie w depilacji pastą cukrową. Dzięki temu możesz być pewna, że zabieg zostanie przeprowadzony w sposób bezpieczny i skuteczny. Nasi eksperci zadbają o Twój komfort oraz odpowiednią technikę, aby minimalizować dyskomfort podczas depilacji.
        </Text>
        <Text fontWeight='bold'>2. Naturalne składniki</Text>
        <Text mb={4}>
          Pasta cukrowa, której używamy, składa się z naturalnych składników, takich jak cukier, woda i sok z cytryny. Dzięki temu jest delikatna dla skóry i nie powoduje podrażnień, co czyni ją idealnym rozwiązaniem nawet dla osób z wrażliwą skórą.
        </Text>
        <Text fontWeight='bold'>3. Mniej bólu</Text>
        <Text mb={4}>
          W porównaniu do tradycyjnych metod depilacji, takich jak woskowanie, depilacja pastą cukrową jest mniej bolesna. Pasta przyczepia się tylko do włosów, a nie do skóry, co zmniejsza odczucie bólu podczas usuwania owłosienia.
        </Text>
        <Text fontWeight='bold'>4. Długotrwały efekt</Text>
        <Text mb={4}>
          Depilacja pastą cukrową usuwa włosy z korzeniami, co oznacza, że efekt gładkiej skóry utrzymuje się dłużej – zazwyczaj od 3 do 6 tygodni. Regularne stosowanie tej metody może również prowadzić do osłabienia włosów, co sprawia, że stają się one cieńsze i mniej widoczne.
        </Text>
        <Text fontWeight='bold'>5. Przyjemna atmosfera</Text>
        <Text mb={4}>
          W JK Studio dbamy nie tylko o efektywność zabiegów, ale także o przyjemną atmosferę. Podczas wizyty w naszym salonie możesz liczyć na relaksującą muzykę, komfortowe warunki oraz profesjonalną obsługę, co sprawia, że każdy zabieg staje się miłym doświadczeniem.
        </Text>
        <Text fontWeight='bold'>Podsumowanie</Text>
        <Text mb={4}>
          Depilacja pastą cukrową w JK Studio to doskonały wybór dla osób poszukujących skutecznej, bezpiecznej i naturalnej metody usuwania owłosienia. Dzięki naszym wykwalifikowanym specjalistom, długotrwałym efektom oraz przyjemnej atmosferze, warto dać tej metodzie szansę. Zainwestuj w swoje piękno i komfort, wybierając depilację pastą cukrową w naszym salonie!
        </Text>
      </Stack>
    ),
  },
  {
    id: 2,
    title: t('blog.why_sugar_paste'),
    date: '2024-08-02',
    image: '/images/pasta-cukrowa.png',
    content: 'Dlaczego pasta cukrowa.',
  },
  {
    id: 3,
    title: t('blog.alexandria_products'),
    date: '2024-08-02',
    image: '/images/kosmetyki.png',
    content: 'Produkty Alexandria Professional',
  },
  {
    id: 4,
    title: t('blog.procedure'),
    date: '2024-08-02',
    image: '/images/depilacja.png',
    content: 'Jak wygląda zabieg',
  },
];
return articles;
};
export default Articles;
