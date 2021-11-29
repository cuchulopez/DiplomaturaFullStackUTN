import React from 'react'

export const Precios = () => {
    return (
        <div className="contenido">
          <h3>Precios</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Temporada Alta</th>
                <th scope="col">Temporada Media</th>
                <th scope="col">Temporada Baja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1 Ambiente</th>
                <td>200</td>
                <td>150</td>
                <td>100</td>
              </tr>
              <tr>
                <th scope="row">2 Ambientes</th>
                <td>300</td>
                <td>200</td>
                <td>150</td>
              </tr>
              <tr>
                <th scope="row">3 Ambientes</th>
                <td>500</td>
                <td>400</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}
