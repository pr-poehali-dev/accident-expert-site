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
      <header className="bg-white shadow-md border-b fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Icon name="Scale" className="h-10 w-10 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  АвтоЭксперт Профи
                </h1>
                <p className="text-xs text-gray-500">Независимая экспертиза</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-6">
              <a
                href="#hero"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#emergency"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Экстренная помощь
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Как работаем
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <div className="text-right hidden md:block">
                <div className="text-lg font-bold text-gray-900">
                  +7 (495) 123-45-67
                </div>
                <div className="text-xs text-green-600 font-medium">
                  Круглосуточно
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 animate-pulse shadow-lg">
                <Icon name="Phone" className="mr-2" />
                Аварийный комиссар
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white flex items-center"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage:
              "url(/img/ddfa4897-4a3a-4c71-bc11-1642207d0f02.jpg)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Попали в <span className="text-orange-400">ДТП?</span>
            </h1>
            <p className="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Получите профессиональную помощь от независимых экспертов. Защитим
              ваши интересы в суде и страховой компании.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-orange-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Выезд за 2 часа</h3>
                <p className="text-blue-100">В любую точку города</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <Icon
                  name="Shield"
                  className="h-12 w-12 text-green-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Гарантия результата
                </h3>
                <p className="text-blue-100">10+ лет опыта</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <Icon
                  name="FileCheck"
                  className="h-12 w-12 text-yellow-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Документы для суда
                </h3>
                <p className="text-blue-100">Юридическая сила</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-xl px-8 py-4 shadow-xl"
              >
                <Icon name="Calculator" className="mr-3" />
                Рассчитать ущерб онлайн
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-8 py-4"
              >
                <Icon name="MessageSquare" className="mr-3" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section
        id="emergency"
        className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Только что произошло ДТП?</h2>
          <p className="text-xl mb-8 text-red-100">
            Не паникуйте! Наш аварийный комиссар приедет на место происшествия и
            поможет правильно оформить документы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-4 animate-pulse"
            >
              <Icon name="Phone" className="mr-3" />
              Вызвать комиссара сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-xl px-8 py-4"
            >
              <Icon name="Download" className="mr-3" />
              Чек-лист действий при ДТП
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по экспертизе ДТП — от выезда на место до
              защиты в суде
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="Car" className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Экспертиза ДТП
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Независимое определение причин и обстоятельств аварии.
                  Подробный анализ для суда или страховой компании.
                </CardDescription>
                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    От 8 000 ₽
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="DollarSign" className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Расчет ущерба
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Точная оценка стоимости восстановительного ремонта с учетом
                  износа и рыночных цен.
                </CardDescription>
                <div className="mt-6">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    От 5 000 ₽
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="Shield" className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Аварийный комиссар
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Экстренная помощь на месте ДТП: правильное оформление, защита
                  ваших интересов, консультация.
                </CardDescription>
                <div className="mt-6">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    От 3 000 ₽
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600">
              Простой и прозрачный процесс от заявки до результата
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-96 bg-gradient-to-b from-blue-200 to-blue-400 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Step 1 */}
              <div className="flex items-center lg:justify-end">
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      1. Обращение
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Звоните или оставляйте заявку на сайте. Консультация
                      бесплатно.
                    </p>
                  </div>
                  <div className="bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl">
                    <Icon name="Phone" className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl">
                    <Icon name="MapPin" className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2. Выезд эксперта
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Приезжаем в течение 2 часов в любую точку города. Работаем
                      24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center lg:justify-end">
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      3. Экспертиза
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Детальный осмотр, фотофиксация, измерения и анализ
                      повреждений.
                    </p>
                  </div>
                  <div className="bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl">
                    <Icon name="Search" className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl">
                    <Icon name="FileText" className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      4. Заключение
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Готовим подробный отчет в течение 1-3 дней. Поддержка в
                      суде.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Почему нам доверяют
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Успешных экспертиз</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Лет на рынке</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Выигранных дел</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Как долго делается экспертиза?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                Стандартная экспертиза готовится за 1-3 рабочих дня. Срочные
                случаи — в течение суток за дополнительную плату.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Сколько стоят ваши услуги?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                Экспертиза ДТП — от 8 000 ₽, расчет ущерба — от 5 000 ₽,
                аварийный комиссар — от 3 000 ₽. Точная стоимость зависит от
                сложности случая.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Принимают ли суды ваши заключения?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                Да, все наши заключения имеют полную юридическую силу. При
                необходимости наш эксперт явится в суд для дачи пояснений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Работаете ли вы в выходные и праздники?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                Да, наш аварийный комиссар работает круглосуточно 7 дней в
                неделю. Плановые экспертизы проводим с понедельника по субботу.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contacts"
        className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Нужна помощь эксперта?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Получите бесплатную консультацию и узнайте, как защитить свои права
            после ДТП
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Icon
                  name="Phone"
                  className="h-8 w-8 mx-auto mb-3 text-orange-400"
                />
                <p className="text-2xl font-bold">+7 (495) 123-45-67</p>
                <p className="text-blue-200">Круглосуточно</p>
              </div>
              <div>
                <Icon
                  name="Mail"
                  className="h-8 w-8 mx-auto mb-3 text-green-400"
                />
                <p className="text-lg font-semibold">info@autoexpert-pro.ru</p>
                <p className="text-blue-200">Ответим в течение часа</p>
              </div>
              <div>
                <Icon
                  name="MapPin"
                  className="h-8 w-8 mx-auto mb-3 text-yellow-400"
                />
                <p className="text-lg font-semibold">г. Москва</p>
                <p className="text-blue-200">Выезд по всему городу</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-xl px-8 py-4"
            >
              <Icon name="Phone" className="mr-3" />
              Позвонить сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-8 py-4"
            >
              <Icon name="MessageCircle" className="mr-3" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Scale" className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">АвтоЭксперт Профи</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональная экспертиза ДТП с 2014 года. Защищаем права
                автомобилистов в сложных ситуациях.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Send" className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#process"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Как работаем
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Примеры работ
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Отзывы
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Лицензии
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">info@autoexpert-pro.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">
                    г. Москва, ул. Примерная, д. 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 АвтоЭксперт Профи. Все права защищены. |
              <a href="#" className="hover:text-white ml-2">
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
