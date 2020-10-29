import { rest } from 'msw'
import defaultImg from "images/computer_image.png"

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  rest.get('/categories', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: "Programowanie & IT", nameInUrl:"it" },
        { id: 2, name: "Design", nameInUrl:"design" },
        { id: 3, name: "Biznes", nameInUrl:"business" },
        { id: 4, name: "Pisanie & Tłumacznie", nameInUrl:"writing" },
        { id: 5, name: "Marketing", nameInUrl:"marketing" },
      ])
    )
  }),

  rest.get('/sort', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: "wg popularności" },
        { id: 2, name: "wg najnowszego" },
        { id: 3, name: "wg najstarszego" },
        { id: 4, name: "wg najdroższego" },
        { id: 5, name: "wg najtańszego" },
      ])
    )
  }),

  rest.get('/notices/it', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          image: defaultImg,
          title: "Zrobię dla Ciebię stronę internetową",
          freelancer: {
            id: 1,
            name: "Tomek Kowalski",
            thumbnail: "",
            rate: 4.53,
          },
          price: 222.5,
        },
        {
          id: 2,
          image: defaultImg,
          title: "Zrobię dla Ciebię sklep internetowy",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 201.5,
        },
        {
          id: 3,
          image: defaultImg,
          title: "Zrobię dla Ciebię bazę danych",
          freelancer: {
            id: 3,
            name: "Jan Biedroń",
            thumbnail: "",
            rate: 4.21,
          },
          price: 254.5,
        },
        {
          id: 4,
          image: defaultImg,
          title: "Zrobię dla Ciebię inteligentny mikrokontroler do sterowania domem",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 255,
        },
        {
          id: 5,
          image: defaultImg,
          title: "Zrobię dla sieć internetową w domu",
          freelancer: {
            id: 5,
            name: "Cezary Panel",
            thumbnail: "",
            rate: 2.1,
          },
          price: 158,
        },
        {
          id: 6,
          image: defaultImg,
          title: "Zrobię dla Ciebię stronę internetową",
          freelancer: {
            id: 1,
            name: "Tomek Kowalski",
            thumbnail: "",
            rate: 4.53,
          },
          price: 222.5,
        },
        {
          id: 7,
          image: defaultImg,
          title: "Zrobię dla Ciebię sklep internetowy",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 201.5,
        },
        {
          id: 8,
          image: defaultImg,
          title: "Zrobię dla Ciebię bazę danych",
          freelancer: {
            id: 3,
            name: "Jan Biedroń",
            thumbnail: "",
            rate: 4.21,
          },
          price: 254.5,
        },
        {
          id: 9,
          image: defaultImg,
          title: "Zrobię dla Ciebię inteligentny mikrokontroler do sterowania domem",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 255,
        },
        {
          id: 10,
          image: defaultImg,
          title: "Zrobię dla sieć internetową w domu",
          freelancer: {
            id: 5,
            name: "Cezary Panel",
            thumbnail: "",
            rate: 2.1,
          },
          price: 158,
        },
      ])
    )
  }),

  rest.get('/notices/marketing', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          image: defaultImg,
          title: "Zrobię dla Ciebię stronę internetową",
          freelancer: {
            id: 1,
            name: "Tomek Kowalski",
            thumbnail: "",
            rate: 4.53,
          },
          price: 222.5,
        },
        {
          id: 2,
          image: defaultImg,
          title: "Zrobię dla Ciebię sklep internetowy",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 201.5,
        },
        {
          id: 3,
          image: defaultImg,
          title: "Zrobię dla Ciebię bazę danych",
          freelancer: {
            id: 3,
            name: "Jan Biedroń",
            thumbnail: "",
            rate: 4.21,
          },
          price: 254.5,
        },
        {
          id: 4,
          image: defaultImg,
          title: "Zrobię dla Ciebię inteligentny mikrokontroler do sterowania domem",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 255,
        },
        {
          id: 5,
          image: defaultImg,
          title: "Zrobię dla sieć internetową w domu",
          freelancer: {
            id: 5,
            name: "Cezary Panel",
            thumbnail: "",
            rate: 2.1,
          },
          price: 158,
        },
        {
          id: 6,
          image: defaultImg,
          title: "Zrobię dla Ciebię stronę internetową",
          freelancer: {
            id: 1,
            name: "Tomek Kowalski",
            thumbnail: "",
            rate: 4.53,
          },
          price: 222.5,
        },
        {
          id: 7,
          image: defaultImg,
          title: "Zrobię dla Ciebię sklep internetowy",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 201.5,
        },
        {
          id: 8,
          image: defaultImg,
          title: "Zrobię dla Ciebię bazę danych",
          freelancer: {
            id: 3,
            name: "Jan Biedroń",
            thumbnail: "",
            rate: 4.21,
          },
          price: 254.5,
        },
        {
          id: 9,
          image: defaultImg,
          title: "Zrobię dla Ciebię inteligentny mikrokontroler do sterowania domem",
          freelancer: {
            id: 2,
            name: "Marek Nowak",
            thumbnail: "",
            rate: 3.53,
          },
          price: 255,
        },
        {
          id: 10,
          image: defaultImg,
          title: "Zrobię dla sieć internetową w domu",
          freelancer: {
            id: 5,
            name: "Cezary Panel",
            thumbnail: "",
            rate: 2.1,
          },
          price: 158,
        },
      ])
    )
  }),

rest.get('/user/1/notices', (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        image: defaultImg,
        title: "Zrobię dla Ciebię stronę internetową",
        freelancer: {
          id: 1,
          name: "Tomek Kowalski",
          thumbnail: "",
          rate: 4.53,
        },
        price: 222.5,
      },
      {
        id: 3,
        image: defaultImg,
        title: "Zrobię dla Ciebię bazę danych",
        freelancer: {
          id: 1,
          name: "Michał Skorus",
          thumbnail: "",
          rate: 4.21,
        },
        price: 254.5,
      },
      {
        id: 4,
        image: defaultImg,
        title: "Zrobię dla Ciebię inteligentny mikrokontroler do sterowania domem",
        freelancer: {
          id: 1,
          name: "Michał Skorus",
          thumbnail: "",
          rate: 3.53,
        },
        price: 255,
      },
      {
        id: 5,
        image: defaultImg,
        title: "Zrobię dla sieć internetową w domu",
        freelancer: {
          id: 1,
          name: "Michał Skorus",
          thumbnail: "",
          rate: 2.1,
        },
        price: 158,
      },
      {
        id: 6,
        image: defaultImg,
        title: "Zrobię dla Ciebię stronę internetową",
        freelancer: {
          id: 1,
          name: "Michał Skorus",
          thumbnail: "",
          rate: 4.53,
        },
        price: 222.5,
      },
      
    ])
  )
}),

rest.get('/user/1/reviews', (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Premium",
        price: 2000,
        createdAt: "2020-08-23",
        serviceQuality: 3,
        communication: 4,
        compatibility: 5,
        rate: 4,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 2,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Premium",
        price: 1500,
        createdAt: "2020-07-29",
        serviceQuality: 4,
        communication: 4,
        compatibility: 4,
        rate: 4,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 3,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Standardowa",
        price: 800,
        createdAt: "2020-06-13",
        serviceQuality: 3,
        communication: 2,
        compatibility: 2,
        rate: 2.33,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 4,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Podstawowa",
        price: 300,
        createdAt: "2020-03-02",
        serviceQuality: 3,
        communication: 4,
        compatibility: 3,
        rate: 3.33,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 5,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Premium",
        price: 2200,
        createdAt: "2020-01-23",
        serviceQuality: 5,
        communication: 4,
        compatibility: 5,
        rate: 4.66,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      
    ])
  )
}),
rest.get('/notice/1/reviews', (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 2,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Premium",
        price: 1500,
        createdAt: "2020-07-29",
        serviceQuality: 4,
        communication: 4,
        compatibility: 4,
        rate: 4,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 4,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Podstawowa",
        price: 300,
        createdAt: "2020-03-02",
        serviceQuality: 3,
        communication: 4,
        compatibility: 3,
        rate: 3.33,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      {
        id: 5,
        title: "Stworzę stylową stronę internetową dla twojego sklepu",
        type: "Premium",
        price: 2200,
        createdAt: "2020-01-23",
        serviceQuality: 5,
        communication: 4,
        compatibility: 5,
        rate: 4.66,
        review:
          "Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque lectus. Donec et pharetra dui.",
      },
      
    ])
  )
}),

]

