import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: '14 990 kr',
      description: 'Titan-design med A17 Pro-chip',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=600&fit=crop',
      rating: 5
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: '12 990 kr',
      description: 'AI-drevet kamera og 200MP sensor',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=600&fit=crop',
      rating: 5
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: '10 990 kr',
      description: 'Ren Android med fantastisk kamera',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=600&fit=crop',
      rating: 4
    },
    {
      id: 4,
      name: 'OnePlus 12',
      price: '8 990 kr',
      description: 'Hasselblad-kamera og rask lading',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop',
      rating: 4
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      price: '9 490 kr',
      description: 'Leica-optikk og kraftig ytelse',
      image: 'https://images.unsplash.com/photo-1592286927505-b4923a7193e7?w=400&h=600&fit=crop',
      rating: 4
    },
    {
      id: 6,
      name: 'Nothing Phone 2',
      price: '7 990 kr',
      description: 'Unikt design med Glyph-interface',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=600&fit=crop',
      rating: 4
    }
  ];

  const reviews = [
    {
      name: 'Lars Johansen',
      rating: 5,
      text: 'Utrolig rask levering og flott service! Veldig fornøyd med min nye iPhone.',
      date: '2 dager siden'
    },
    {
      name: 'Emma Pedersen',
      rating: 5,
      text: 'Beste priser på markedet. Telefonen kom godt pakket og i perfekt stand.',
      date: '5 dager siden'
    },
    {
      name: 'Andreas Berg',
      rating: 4,
      text: 'God kundeservice og lett kjøpsprosess. Anbefales!',
      date: '1 uke siden'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Smartphone" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold">SMARTTELEFONER</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
                Hjem
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Katalog
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
                Anmeldelser
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Kontakt
              </button>
              <Icon name="Phone" size={20} />
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Fremtidens Smarttelefoner
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Oppdag de nyeste og mest avanserte smarttelefonene på markedet. Vi tilbyr konkurransedyktige priser, rask levering og eksepsjonell kundeservice.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="group">
                  Se Katalog
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Kontakt Oss
                </Button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Fornøyde kunder</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Modeller</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=800&fit=crop" 
                alt="Smarttelefon"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vår Katalog</h2>
            <p className="text-muted-foreground text-lg">Velg din perfekte smarttelefon fra vårt utvalg</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product.id)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {product.name}
                    <div className="flex gap-0.5">
                      {[...Array(product.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button className="group">
                    Kjøp nå
                    <Icon name="ShoppingCart" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kundeomtaler</h2>
            <p className="text-muted-foreground text-lg">Hør hva våre kunder sier</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt Oss</h2>
            <p className="text-muted-foreground text-lg">Vi er her for å hjelpe deg</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Navn</label>
                  <Input placeholder="Ditt navn" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">E-post</label>
                  <Input type="email" placeholder="din@epost.no" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefon</label>
                  <Input type="tel" placeholder="+47 123 45 678" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Melding</label>
                  <Textarea placeholder="Hvordan kan vi hjelpe deg?" rows={5} />
                </div>
                <Button className="w-full h-12 text-base" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Send Melding
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">E-post</h3>
              <p className="text-sm text-muted-foreground">post@smarttelefoner.no</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-sm text-muted-foreground">+47 800 12 345</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-sm text-muted-foreground">Karl Johans gate 1, Oslo</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smartphone" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">SMARTTELEFONER</h3>
              </div>
              <p className="text-gray-400 text-sm">Din pålitelige partner for de nyeste smarttelefonene.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produkter</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>iPhone</li>
                <li>Samsung</li>
                <li>Google Pixel</li>
                <li>OnePlus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informasjon</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Om oss</li>
                <li>Leveringsinformasjon</li>
                <li>Retningslinjer</li>
                <li>Personvern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Følg oss</h4>
              <div className="flex gap-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Smarttelefoner. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
