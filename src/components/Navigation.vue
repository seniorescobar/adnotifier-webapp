<template>
  <nav class="bg-secondary">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-8 offset-lg-2">
          <div
            class="bar d-flex align-items-center justify-content-end justify-content-sm-between mb-3"
          >
            <div class="d-flex align-items-center">
              <router-link
                :to="{ name: 'targets' }"
                class="h1 text-white mb-0 d-none d-sm-block"
              >
                Targets
              </router-link>
              <span
                v-if="loading"
                class="spinner-grow spinner-grow-sm ml-3"
                role="status"
                aria-hidden="true"
              ></span>
            </div>
            <div class="dropdown">
              <button
                class="btn text-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ email }}
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <router-link class="dropdown-item" :to="{ name: 'settings' }"
                  >Settings</router-link
                >
                <router-link class="dropdown-item" :to="{ name: 'signout' }"
                  >Sign out</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["email", "loading"],
};
</script>