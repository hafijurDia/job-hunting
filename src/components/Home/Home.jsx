/* eslint-disable no-unused-vars */
import React from 'react';

export default function Home() {
  return (
    <div class="container mx-auto px-4">

        <header class="py-4">
            <h1 class="text-3xl font-bold text-center">My Website</h1>
        </header>


        <main>

            <section class="py-8">
                <div class="grid grid-cols-3 gap-4">

                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-lg font-semibold mb-2">Card 1</h2>
                        <p>This is a simple card example.</p>
                    </div>
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-lg font-semibold mb-2">Card 2</h2>
                        <p>This is another card example.</p>
                    </div>
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-lg font-semibold mb-2">Card 3</h2>
                        <p>This is yet another card example.</p>
                    </div>
                </div>
            </section>
        </main>


        <footer class="py-4 mt-8 border-t border-gray-200 text-center">
            &copy; 2024 My Website. All rights reserved.
        </footer>
    </div>
  )
}

