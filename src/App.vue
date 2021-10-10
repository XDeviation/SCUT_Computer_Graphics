<template>
  <!-- <v-app>
    <v-main>
      <test/>
    </v-main>
  </v-app> -->
  <div>
    <li v-for="item in items" :key="item">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
    <router-view />
  </div>
</template>

<script>
// import test from "./components/test";

export default {
  name: "App",

  components: {
    // test,
  },

  data: () => ({
    items: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "day1_problems",
        path: "/day1_problems",
      },
      {
        name: "green_triangle",
        path: "/green_triangle",
      },
      {
        name: "triangle_ball",
        path: "/triangle_ball",
      },
      {
        name: "sierpinski_gasket",
        path: "/sierpinski_gasket",
      },
      {
        name: "convex_polygon",
        path: "/convex_polygon",
      },
      {
        name: "day3_problems",
        path: "/day3_problems",
      },
      {
        name: "exp1",
        path: "/exp1",
      },
    ],
  }),

  methods: {},
};
</script>
