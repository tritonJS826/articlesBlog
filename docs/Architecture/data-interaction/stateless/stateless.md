﻿# Stateless.

Данный тип архитектуры редко используетсяа в enterprise проектах. Хотя, возможно, это один из самых распространённых понятных и привычных, лёгких для работы, гибких в плане разработки и дешёвых типов архитектуры. Схематически ее можно изобразить так

![](20221126_1_stateless.png) (Рис. 1):

*Рис.1 Stateless front-end архитектура*

Речь идёт о сайте с обычными статическими страницами без клиентского состояния. Начиная от лендингов (самый простой случай) и заканчивая блогами, энциклопедиями, e-commers, презентационными и информационными сайтами для компаний почти любого уровня. Все преимущества данного типа архитектуры сложно перечислить, затронем лишь некоторые из них:

* лёгкость и скорость в разработке
* более дешёвые специалисты
* минимальный бандл для каждой страницы (значит более быстрая доставка пользователю)
* за счёт простоты можно подключать почти напрямую разных специалистов по типу отдельных верстальщиков, SEO-мастеров, дизайнеров для работы с анимациями, и пр. Инженеры могу заниматься только инженерными делами только там где это необходимо.
* прозрачная и понятная для всех архитектура

Этот тип архитектуры на столько популярный, что при начале разработки нужно всегда подумать о нем, если он подойдёт, то бизнес сможет сэкономить очень много сил и времени. Так какие же минусы, которые заставляют отказываться от такого лакомого куска? Их не так уж много, но порой они могут быть критичными.

* требование максимально высокой скорости интерактивности
* много принципиально разных по строению страниц, которые много взаимодействуют между собой (состояние одной зависит от того, что происходило на предыдущей)

По сути это требования которые прямо говорят, что нужно сделать не сайт, а полноценное приложение.

Давайте обсудим некоторые особенности данного типа архитектуры и как далеко она может простираться. В простейшем случае статическая страница будет содержать только html разметку и css стили. Если мы будем говорить о состоянии, то очевидно на клиентской стороне его просто нет! Все состояние которое у нас есть — храниться на сервере. Пользователь запрашивает страничку, сервер рендерит её, вставляет необходимые данные (вот оно состояние условное) если необходимо, или просто читает сохранённый файл и возвращает этот файл пользователю. Наши страницы пока ещё совсем не обладают никакой логикой, но они уже могут общаться друг с другом — передавать друг другу данные с помощью url-параметров, отправлять данные формы или делать другие запросы в api с помощью javaScript, тем самым изменяя состояние на сервере и как следствие — изменяя состояние других страниц которые связаны с измененными даггыми. Как вариант старого подхода страницы могут обмениваться информкцией в cookies. Но могут ли наши страницы по-настоящему общаться, без использования сервера? Конечно да! В браузере доступны различные способы хранения информации только на клиентской стороне — например sessionStorage, localStorage, indexDB; как более экзотические варианты,которые почти невозможно встретить с этой архитектурой — использование ServiceWorker, CacheAPI. А что на счет обработки данных состояния страницы на клиенте? Если честно, то отсутствие состояния для статической страницы — это не совсем правда, ведь хоть страница это и просто текст, но ведь пользователь работает не с текстовым файлом. Вся доступная информация содержится в DOM-дереве, и разработчик может получит к ней доступ и модифицировать с помощью javaScript.

Остановимся.

Сначала я сказал, что страницы в нашей архитектуре не обладают состоянием и не взаимодействуют друг с другом. А потом сказал, что в принципе можно и работать с состоянием на странице и передавать его другим страницам. Это может показаться странным для новичков, но как я говорил архитектура — это не что-то зафиксированное, она живёт и развивается плавно изменяясь и превращаясь во что-то новое. Главное, что должны быть выработаны общие понятные всем подходы, что бы развитием приложения можно было управлять. Хранить состояние в webStorage для каждой страницы сайта можно, но это может превратиться в свалку данных которыми сложно управлять и из-за этого время на разработку и отладку багов возрастёт.

Если таких «интеграций» мало и ситуация под контролем, то все хорошо. Но если таких интеграций много — то архитектура была выбрана не верно, и это повлечёт значительные издержки для бизнеса. Не существует «правильной» архитектуры, существует только уместная на конкретный момент или нет. Могут просто измениться условия и например вместо блога вам нужно будет создать социальную сеть. В таких случаях (если архитектура значительно не уместна) стоит задумываться о полной или частичной миграции проекта на новую архитектуру, не смотря на то, что это достаточно сложное и дорогое решение в моменте, оно может достаточно быстро окупаться, особенно для больших проектов.

Не смотря на то что такая stateless архитектура кажется простой, в ней все же достаточно глубины и сложных для решения задач характерных для всего front-end — хорошая организация адресов, консистентный дизайн и подходы к взаимодействию с пользователем, настройка шаблонов страниц, уместная обработка состояния и интеграция страниц, выбор стэка технологий в целом (наличие typeScript, фреймворка, плагинов и пр.), интеграций с другими системами.