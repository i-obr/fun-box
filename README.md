# Нямушка

**Браузеры:** Chrome, Firefox, Opera, Safari, IE11;
**Стандарты:** на ваше усмотрение;
**Структура проекта:** на ваше усмотрение;
**Результат:** корректное отображение и поведение на любых современных десктопных компьютерах, смартфонах и планшетах.

## Task Requirements
1. Фон занимает всю площадь экрана, блок находится по центру вертикально и горизонтально.
2. Информация о продукте может меняться.
3. Каждая из упаковок может быть выбрана или недоступна для выбора. Выбор осуществляется нажатием на упаковку или на текст «купи» в описании.
4. Можно выбрать одновременно несколько упаковок, а также отменить свой выбор повторным нажатием на упаковку.
5. Состояние наведения применяется к выбранной упаковке не сразу, а после того, как курсор ушел с нее после первоначального выбора.

## Task 1 Addition
Адаптируйте макет под планшеты и смартфоны так, чтобы на планшетах упаковки располагались треугольником, а на смартфонах — друг под другом. Параметры макета при этом можно менять, как того потребует задача.

---

# Q1
Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
• пользователя;
• менеджера проекта;
• дизайнера;
• верстальщика;
• клиентского программиста;
• серверного программиста.

# A1
С точки зрения пользователя хорошая вёрстка это когда, контент доступен с устройства на котором он просматривает сайт, текст комфортно читатать с возоможностью масштабирования при необходимости. Быстро открывается страница и откликается на нажатия кнопок и ссылок с возможностью навигации по сайту разными способами (клавиатура, курсор, читалки), с приятными для восприятия цветами с возможностью переключения на доступные цвета, пример [caniuse](https://caniuse.com/#)
С точки зрения менеджера проекта, чтобы клиент остался доволеным? :) (затрудняюсь с ответом)
С точки зрения дизайнера, хорошая вёрстка должна быть максимально приближена к макету, с соблюдением размеров шрифтов, отступов и реализацией всех состояний интерактивных элементов.
С точки зрения верстальщика хорошая вёрстка - это единообразно написанный код, даже если её делают разные люди, с использованием линтеров, с применением (при необходимости) методологии по именованию классов CSS для лучшего понимания за что отвечает какая-либо часть кода, проходящая валидацию и семантическая без излишней вложенности. С понятной инфраструктурой проекта, с разбиением кода на мелкие части с возможностью расширения и дальнейшей поддержки, с удобной автоматизацией задач.
Для клиентского и серверного программистов, на мой взгляд хорошая вёрстка должна быть с проработкой всех состояний элементов до мелких деталей, например, если имеется попап, то для него должны быть написаны стили для скрытия/показа, позиционирования, с подробными комментариями при необходимости в них.

# Q2
Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

# A2
Основная проблема вёрстки многостраничных сайтов заключается в том, что где-то добавляешь что-то новое, которое ломает уже реализованное в другом месте. Для минимализации такого эффекта необходимо придерживаться методологии по именованию классов CSS(возможно, с применением CSS-модулей) для понимания и для независимости блоков, следить за подключением стилевых файлов или их конкатенацией в правильном порядке. Большие объёмы кода, который нужно разбивать на мелкие части, и хранить по разным директориям и файлам, эти же директории должны быть задокументированы, чтобы любой участник команды понимал где, что находится. Для поддержки и добавления новых элементов очень важно развивать свою библиотеку компонентов/блоков, если не используется какая-то внешняя, для быстрого использования их в вёрстке. Всё, что можно автоматизировать должно быть автоматизировано.
В своей практике я придерживаюсь БЭМ'a, применяю препроцессоры, был опыт использования CSS-модулей(плагин PostCSS), автоматизация gulp, webpack.

# Q3
Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

# A3
Не забывать про `<meta name="viewport" content="width=device-width, initial-scale=1"> `, использовать `media queries`, адаптирвоать графику.
Вёрстку проверяю на эмуляторе мобильных устройств в Google DevTools, итоговую вёрстку проверяю для iOS устройств через Xcode, для андроид устройств использую реальный смартфон.

# Q4
Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

# A4
Для написания стилей использую препроцессоры (`Scss`, `Less`, `Stylus`, `cssnext`, `stylelint`, `eslint`), для html шаблонизаторы `nunjucks` или `pug`, собирается всё `gulp`-ом. Для отладки Google DevTools хотя в последнее время много пользуюсь Firefox :)

# Q5
Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

# A5
Через инструменты разработчика выяснить как свёрстана проблемная часть, проверить поддерживаются ли данные CSS-свойства этими браузерами.
А ещё я пробую на браузере с корректным отображением, воссоздать некорректное отображение как в проблемном, и иногда это помогает понять причину проблемы.

# Q6
Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

# A6
Зависит от обстоятельств и проекта, если сроки позволяют и интерактивные элементы достаточно сложные, то правильней будет, как мне кажется, попросить дизайнера доделать, если проект срочный и элементы не сложные, то можно реализовать в процессе вёрстки с демонстрацией дизайнеру.

# Q7
Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).
Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое?
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

# A7
Основные новости из мира фронтенда получаю из социальных сетей, из сообществ "Веб-стандарты", "ForWeb", из блогов предпочитаю CSS-live, frontender magazine и прогрессор, смотрю стримы Юрия Артюха, также подписан на email-рассылки frontend focus и htmlacademy.
Много занимаюсь на курсах Hexlet, планирую осилить их профессию Фронтенд-программист, закончил первый проект, в этом месяце начну второй.
Люблю рыбалку :)

# Q8
Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

# A8
Некоторые мои работы можно посмотреть [здесь](https://i-obr.github.io/oi/index.html), так же там указана информация по моим навыкам.
