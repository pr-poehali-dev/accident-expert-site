import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Icon name="Scale" className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                АвтоЭксперт Профи
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Главная
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Услуги
              </a>
              <a href="#cases" className="text-gray-600 hover:text-gray-900">
                Примеры работ
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">
                Отзывы
              </a>
              <a href="#contacts" className="text-gray-600 hover:text-gray-900">
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">
                  +7 (495) 123-45-67
                </div>
                <div className="text-sm text-gray-600">24/7</div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 animate-pulse">
                <Icon name="Phone" className="mr-2" />
                Аварийный комиссар
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url(/img/ddfa4897-4a3a-4c71-bc11-1642207d0f02.jpg)",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Независимая экспертиза ДТП с гарантией точности
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Судебные и досудебные заключения, расчет ущерба, помощь
                аварийного комиссара
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать ущерб онлайн
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Icon name="Phone" className="mr-2" />
                  Вызвать эксперта
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <Icon name="FileText" className="h-16 w-16 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Бесплатная консультация
                </h3>
                <p className="text-blue-100">
                  Получите экспертную оценку вашей ситуации прямо сейчас
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональная экспертиза на всех этапах
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Car" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Экспертиза ДТП
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Определение причин и обстоятельств аварии для суда или
                  страховой компании
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Расчет ущерба
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Точная оценка стоимости ремонта с учетом рыночных цен и износа
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Аварийный комиссар
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Помощь на месте ДТП: оформление, консультация, защита
                  интересов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Процесс за 4 шага
            </h2>
            <p className="text-xl text-gray-600">
              Простой и понятный алгоритм работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-4">
                <Icon name="Phone" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Заявка</h3>
              <p className="text-gray-600">
                Звоните или оставляйте заявку на сайте
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-4">
                <Icon name="MapPin" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Выезд</h3>
              <p className="text-gray-600">
                Выезд в течение 2 часов в любую точку города
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-4">
                <Icon name="Search" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Анализ</h3>
              <p className="text-gray-600">
                Детальный осмотр и фиксация повреждений
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-4">
                <Icon name="FileText" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Отчет</h3>
              <p className="text-gray-600">
                Подробное заключение в течение 1-3 дней
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start">
              <Icon
                name="CheckCircle"
                className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900">10+ лет опыта</h3>
                <p className="text-gray-600">Сотни успешных дел</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="CheckCircle"
                className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Лицензии и сертификаты
                </h3>
                <p className="text-gray-600">Все необходимые разрешения</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="CheckCircle"
                className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Бесплатная консультация
                </h3>
                <p className="text-gray-600">Оценим вашу ситуацию</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon
                name="CheckCircle"
                className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Гарантия защиты в суде
                </h3>
                <p className="text-gray-600">
                  Поддержим в судебных разбирательствах
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Как долго делается экспертиза?
              </AccordionTrigger>
              <AccordionContent>
                1–3 дня в зависимости от сложности случая. Срочные экспертизы
                выполняем в течение суток.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Сколько стоит экспертиза?
              </AccordionTrigger>
              <AccordionContent>
                От 5 000 рублей. Точная цена определяется после осмотра
                транспортного средства и зависит от объема работ.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Можете ли вы приехать на место ДТП?
              </AccordionTrigger>
              <AccordionContent>
                Да, наши эксперты выезжают на место происшествия в течение 2
                часов после вызова в любое время суток.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Подходит ли ваше заключение для суда?
              </AccordionTrigger>
              <AccordionContent>
                Да, все наши заключения имеют юридическую силу и принимаются
                судами. При необходимости наш эксперт выступит в суде.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Scale" className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">АвтоЭксперт Профи</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная экспертиза ДТП с 2014 года. Качество, точность,
                надежность.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400">+7 (495) 123-45-67</p>
                <p className="text-gray-400">info@autoexpert-pro.ru</p>
                <p className="text-gray-400">г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрая связь</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Чек-лист после ДТП</h4>
              <p className="text-gray-400 mb-4">
                Получите бесплатную инструкцию
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l text-white"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 АвтоЭксперт Профи. Все права защищены. |
              <a href="#" className="hover:text-white">
                Политика конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
