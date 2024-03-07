<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="rounded-full">
                <ph-user-circle width="50" height="50" color="#E0B841" />
            </div>
        </div>
        <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li>
                <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                </a>
            </li>
            <li>
                <a>Settings</a>
            </li>
            <li>
                <a>Logout</a>
            </li>
        </ul>
    </div>
</template>