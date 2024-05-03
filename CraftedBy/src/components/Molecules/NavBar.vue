<template>
  <div class="navbar bg-base-100 sticky z-50 top-0 w-32 sm:w-64 md:w-auto">
    <div class="navbar-start  w-1/3">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="#E0B841"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/products">Les produits</RouterLink>
          </li>
          <li>
            <RouterLink to="/crafters">Les artisans</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center md:w-1/3">
      <SearchBar class="w-8/12 sm:w-3/4" />
      <SearchButton />
    </div>
    <div class="navbar-end w-5/12 md:w-1/3">
      <CartButton />
      <UserButton />
    </div>
  </div>
</template>