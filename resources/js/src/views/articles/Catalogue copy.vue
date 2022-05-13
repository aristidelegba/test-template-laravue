<template>
    <!-- :class="[skinClasses]" -->
    <div class="h-100">
        <!-- form head -->
        <div class="d-flex justify-content-center bg-default py-4 mb-3">
            <div class="d-flex flex-column">
                <!-- <div class="text-center mt-2 text-white"><strong>Gestion des catalogues</strong></div> -->
                <div class="text-center text-white h1">
                    <strong>Gestion des catalogues d'articles</strong>
                </div>
                <div
                    class="d-flex justify-content-center text-center mb-2 text-white row mt-1"
                >
                    <button
                        class="border-default bg-transparent text-white px-2 mr-2"
                    >
                        Importer
                    </button>
                    <b-dropdown
                        variant="flat-light"
                        class="border-default text-white"
                    >
                        <template
                            #button-content
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >
                            <span class="text-white"> Catalogue general </span>
                        </template>
                        <b-dropdown-item> Sous-contrat</b-dropdown-item>
                        <b-dropdown-item> Standard</b-dropdown-item>
                    </b-dropdown>
                    <!-- <div class="ml-3"> <input type="radio" name="type" class="form-check-input pl-1" value="produit" v-model="type"> Produit </div>
          <div class="ml-3"> <input type="radio" name="type" class="form-check-input pl-1" value="service" v-model="type"> Service </div> -->
                </div>
            </div>
        </div>
        <!-- form body -->
        <div class="d-flex justify-content-between mb-4">
            <!-- side navigation -->
            <CategorieNav/>
           
            <!-- content -->
            <div class="col-9">
                <!-- informations principales -->
                <div
                    class="border border-dark rounded p-1"
                    id="infosPrincipales"
                >
                    <div><strong> INFORMATIONS PRINCIPALES</strong></div>
                    <hr />
                    <div class="row">
                        <!-- left -->
                        <div class="col-6">
                            <!-- first group left -->
                            <div class="d-flex justify-content-center">
                                <div
                                    class="d-flex flex-column text-right vl mr-1 p-1"
                                >
                                    <div class="">Libellé de l'article</div>
                                    <div class="mt-2">Catégorie</div>
                                    <div class="mt-2">Marque</div>
                                </div>

                                <div class="d-flex flex-column">
                                    <div>
                                        <b-form-group
                                            ><b-form-input id="basicInput" />
                                        </b-form-group>
                                    </div>
                                    <div>
                                        <b-form-group
                                            ><b-form-select
                                                v-model="selected"
                                                :options="categories"
                                        /></b-form-group>
                                    </div>
                                    <div>
                                        <b-form-group
                                            ><b-form-select
                                                v-model="selected"
                                                :options="marques"
                                        /></b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="col-6">
                            <!-- first group right -->
                            <div class="d-flex justify-content-center">
                                <div
                                    class="d-flex flex-column text-right vl mr-1 p-1"
                                >
                                    <div class="mt-">Référence interne</div>
                                    <div class="mt-2">Référence fabricant</div>
                                    <div class="mt-2">Code à barres</div>
                                </div>

                                <div class="d-flex flex-column">
                                    <div>
                                        <b-form-group>
                                            <b-form-input id="basicInput" />
                                        </b-form-group>
                                    </div>
                                    <div>
                                        <b-form-group>
                                            <b-form-input id="basicInput" />
                                        </b-form-group>
                                    </div>
                                    <div>
                                        <b-form-group>
                                            <b-form-input id="basicInput" />
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- options avancé -->
                    <div
                        class="btn d-flex justify-content-end pr-2 mt-1 mb-1"
                        @click="
                            optionAvanceeInfosPrincipales =
                                !optionAvanceeInfosPrincipales
                        "
                    >
                        Options avancés
                    </div>
                    <div class="row" v-if="optionAvanceeInfosPrincipales">
                        <!-- left -->
                        <div class="col-4">
                            <!-- first group left -->
                            <div class="d-flex justify-content-center">
                                <div
                                    class="d-flex flex-column text-right vl mr-1 p-1"
                                >
                                    <div class="">Marque</div>
                                </div>

                                <div class="d-flex flex-column ml-1">
                                    <div>
                                        <input
                                            type="radio"
                                            name="marque"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label>Article simple</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="marque"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label>Composition simple</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="marque"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label
                                            >Article fabriqué en interne</label
                                        >
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="marque"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label>Lot fabricant</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="col-8">
                            <!-- first group right -->
                            <div class="d-flex justify-content-center">
                                <div
                                    class="d-flex flex-column text-right vl mr-1 p-1"
                                >
                                    <div class="mt-">Période</div>
                                </div>

                                <div class="d-flex flex-column">
                                    <div>
                                        <div class="row mt-1 ml-1">
                                            <div class="p-1">Du</div>
                                            <div>
                                                <b-form-group>
                                                    <b-form-input
                                                        type="date"
                                                        id="basicInput"
                                                    />
                                                </b-form-group>
                                            </div>
                                            <div class="p-1">Au</div>
                                            <div>
                                                <b-form-group>
                                                    <b-form-input
                                                        type="date"
                                                        id="basicInput"
                                                    />
                                                </b-form-group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- détails composition -->
                    <table class="table mt-3">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">
                                    <strong>Référence article</strong>
                                </th>
                                <th scope="col"><strong>Libellé</strong></th>
                                <th scope="col"><strong>Quantité</strong></th>
                                <th scope="col"><strong>Actions</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-success rounded"
                                    >
                                        Ajouter
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- gestion de catalogue -->
                <div
                    class="border border-dark rounded p-1 mt-3"
                    id="gestionCatalogue"
                >
                    <div><strong> GESTION DE CATALOGUE</strong></div>
                    <hr />
                    <small
                        >Diffuser cet article dans les catalogues
                        suivant:</small
                    >
                    <div
                        class="col-6 d-flex justify-content-between form-check shadow-sm bg-white rounded w-auto m-1"
                    >
                        <div>
                            <input
                                type="checkbox"
                                class="form-check-input pl-1"
                                value="A"
                            />
                            <label for=""><strong>SOUS-CONTRACT</strong></label>
                        </div>
                        <div class="color-default categorie-button">
                            Choisir les catégories
                        </div>
                    </div>
                    <div
                        class="col-6 d-flex justify-content-between form-check shadow-sm bg-white rounded w-auto m-1"
                    >
                        <div>
                            <input
                                type="checkbox"
                                class="form-check-input pl-1"
                                value="A"
                            />
                            <label for=""><strong>STANDARD</strong></label>
                        </div>
                        <div class="color-default categorie-button">
                            Choisir les catégories
                        </div>
                    </div>
                </div>

                <!-- prix d'achat -->
                <div class="border border-dark rounded p-1 mt-3" id="prixAchat">
                    <div class="d-flex justify-content-between">
                        <div><strong> PRIX D'ACHAT </strong></div>
                        <div>
                            <label for="custom-control-label"> SWITCH </label>
                        </div>
                    </div>
                    <hr />

                    <div class="d-flex flex-row">
                        <div class="col-3 pr-1 pt-1 vl">
                            TVA appliquée à l'achat
                        </div>
                        <div class="col-3">
                            <b-form-group
                                ><b-form-select
                                    v-model="selected"
                                    :options="optionsTVA"
                            /></b-form-group>
                        </div>
                    </div>

                    <div class="border border-dark rounded p-1 mt-3">
                        <div class="color-default">NON DEFINI</div>
                        <div class="d-flex flex-row">
                            <!-- left -->
                            <div class="col-6">
                                <div class="d-flex justify-content-center">
                                    <div
                                        class="d-flex flex-column text-right vl mr-1 p-1"
                                    >
                                        <div class="mt-">
                                            <strong>Collaborateur</strong>
                                        </div>
                                        <div class="mt-2">
                                            <strong>Remise</strong>
                                        </div>
                                        <div class="mt-3">
                                            <strong>Prix d'achat net</strong>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column">
                                        <div>
                                            <div class="row mt-1">
                                                <div class="col-4">
                                                    <b-form-group>
                                                        <b-form-input
                                                            id="basicInput"
                                                        />
                                                    </b-form-group>
                                                </div>
                                                <div class="col-4">
                                                    <b-form-select
                                                        v-model="choiceDevice"
                                                        :options="devices"
                                                    />
                                                </div>
                                                <div class="col-4">
                                                    <b-form-select
                                                        v-model="choiceTaxe"
                                                        :options="taxes"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4">
                                                <b-form-group>
                                                    <b-form-input
                                                        type="number"
                                                        min="1"
                                                        id="basicInput"
                                                    />
                                                </b-form-group>
                                            </div>
                                            <div class="mt-1">
                                                <strong>%</strong>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4">
                                                <b-form-group>
                                                    <b-form-input
                                                        type="number"
                                                        min="1"
                                                        id="basicInput"
                                                    />
                                                </b-form-group>
                                            </div>
                                            <div class="mt-1">
                                                <strong
                                                    >{{ choiceDevice }}
                                                    {{ choiceTaxe }}</strong
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- right -->
                            <div class="col-6">
                                <div class="d-flex justify-content-center">
                                    <div
                                        class="d-flex flex-column text-right vl mr-1 p-1"
                                    >
                                        <div class="mt-">
                                            <strong>Fournisseur</strong>
                                        </div>
                                        <div class="mt-2">
                                            <strong>Réf fournisseur</strong>
                                        </div>
                                        <div class="mt-3">
                                            <strong>Libellé fournisseur</strong>
                                        </div>
                                        <div class="mt-2">
                                            <strong>Prix de référence</strong>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column">
                                        <div>
                                            <b-form-group>
                                                <b-form-select
                                                    v-model="selected"
                                                    :options="fournisseurs"
                                                />
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <b-form-input id="basicInput" />
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <b-form-input id="basicInput" />
                                            </b-form-group>
                                        </div>
                                        <div>
                                            <b-form-group>
                                                <b-form-select
                                                    v-model="selected"
                                                    :options="prixReference"
                                                />
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- options avancés -->
                        <div
                            class="btn d-flex justify-content-end pr-2 mt-1 mb-1"
                            @click="
                                optionAvanceePrixAchat = !optionAvanceePrixAchat
                            "
                        >
                            Options avancés
                        </div>
                        <div
                            class="d-flex justify-content-center mt-3"
                            v-if="optionAvanceePrixAchat"
                        >
                            <div
                                class="d-flex flex-column text-right vl mr-1 p-1"
                            >
                                <div class="mt-1">
                                    <strong>TVA appliquée à l'achat</strong>
                                </div>
                                <div class="mt-2">
                                    <strong
                                        >Règle de valorisation Cout d'achat
                                        actuel</strong
                                    >
                                </div>
                                <div class="mt-3">
                                    <strong
                                        >Règle de valorisation en stock</strong
                                    >
                                </div>
                            </div>

                            <div class="d-flex flex-column">
                                <div class="mt-1">
                                    <b-form-select
                                        v-model="selected"
                                        :options="optionsTVA"
                                    />
                                </div>

                                <div class="row mt-1">
                                    <div class="col-8">
                                        <b-form-select
                                            v-model="selected"
                                            :options="regleCoutAchatActuel"
                                        />
                                    </div>
                                    <div class="col-2">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                    <div class="mt-1">
                                        <strong
                                            >{{ choiceDevice }}
                                            {{ choiceTaxe }}</strong
                                        >
                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <div class="col-8">
                                        <b-form-select
                                            v-model="selected"
                                            :options="regleValorisationEnStock"
                                        />
                                    </div>
                                    <div class="col-2">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                    <div class="mt-1">
                                        <strong
                                            >{{ choiceDevice }}
                                            {{ choiceTaxe }}</strong
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- frais d'approche du fournisseur -->
                    </div>
                </div>

                <!-- prix de vente -->
                <div class="border border-dark rounded p-1 mt-3" id="prixVente">
                    <div><strong>PRIX DE VENTE</strong></div>
                    <hr />
                    <div class="row">
                        <!-- left -->
                        <div class="col-6">
                            <div class="d-flex justify-content-center">
                                <div
                                    class="d-flex flex-column text-right mr-1 mt-1"
                                >
                                    <div class="">Prix public conseillé:</div>
                                </div>

                                <div class="row">
                                    <!-- <div class="border border-dark rounded h-auto d-inline-block back-gray" style="margin: 0 3px; padding: 0 2px;">0.00</div> -->
                                    <div class="col-6">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                    <div class="ml-2 mt-1">
                                        <input
                                            type="radio"
                                            name="typePriceSelect"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label for=""
                                            ><strong>HT</strong></label
                                        >
                                    </div>
                                    <div class="ml-2 mt-1">
                                        <input
                                            type="radio"
                                            name="typePriceSelect"
                                            class="form-check-input pl-1"
                                            value="A"
                                        />
                                        <label for=""
                                            ><strong>TTC</strong></label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="col-6 d-flex justify-content-center">
                            <div class="d-flex flex-column text-right">
                                <div class="mt-2">
                                    <strong> TVA Appliqué à la vente</strong>
                                </div>
                                <div class="mt-3">
                                    <strong> Valorisation</strong>
                                </div>
                            </div>

                            <div class="d-flex ml-1 mr-1" style="height: 200px">
                                <div class="vr"></div>
                            </div>

                            <div class="d-flex flex-column">
                                <div class="mt-1">
                                    <b-form-select
                                        v-model="selected"
                                        :options="optionsTVA"
                                    />
                                </div>
                                <div class="mt-2">
                                    <b-form-select
                                        v-model="selected"
                                        :options="valorisation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- logistique -->
                <div
                    class="border border-dark rounded p-1 mt-3"
                    id="logistique"
                >
                    <div><strong>INFORMATIONS LOGISTIQUES</strong></div>
                    <hr />
                    <div class="row ml-3">
                        <div class="d-flex flex-column text-right mr-1 mt-1">
                            <div class="">Traçabilité:</div>
                        </div>
                        <div class="row ml-1">
                            <div class="">
                                <b-form-group>
                                    <b-form-select
                                        v-model="selected"
                                        :options="tracabilite"
                                    />
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                    <!-- table -->
                    <table class="table mt-3">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">
                                    <strong>Lieu de Stockage</strong>
                                </th>
                                <th scope="col"><strong>Minimum</strong></th>
                                <th scope="col"><strong>Maximum</strong></th>
                                <th scope="col"><strong>Emplacment</strong></th>
                                <th scope="col">
                                    <strong>Stock Initial</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Stock Distribution Cotonou</td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Stock Consulting</td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- details colis par article -->
                    <table class="table mt-3">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col"><strong>Poids</strong></th>
                                <th scope="col"><strong>Dimension</strong></th>
                                <th scope="col"><strong>Libellé</strong></th>
                                <th scope="col"><strong>Volume</strong></th>
                                <th scope="col"><strong>Action</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="row mt-1">
                                        <div class="col-6">
                                            <b-form-group>
                                                <b-form-input
                                                    type="number"
                                                    min="1"
                                                    id="basicInput"
                                                />
                                            </b-form-group>
                                        </div>
                                        <div class="">
                                            <b-form-select
                                                v-model="choiceDevice"
                                                :options="mesurePoids"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="row mt-1">
                                        <div class="mt-1">H</div>
                                        <div class="col-2">
                                            <b-form-group>
                                                <b-form-input
                                                    type="number"
                                                    min="1"
                                                    id="basicInput"
                                                />
                                            </b-form-group>
                                        </div>
                                        <div class="mt-1">L</div>
                                        <div class="col-2">
                                            <b-form-group>
                                                <b-form-input
                                                    type="number"
                                                    min="1"
                                                    id="basicInput"
                                                />
                                            </b-form-group>
                                        </div>
                                        <div class="mt-1">P</div>
                                        <div class="col-2">
                                            <b-form-group>
                                                <b-form-input
                                                    type="number"
                                                    min="1"
                                                    id="basicInput"
                                                />
                                            </b-form-group>
                                        </div>
                                        <div class="col-3">
                                            <b-form-select
                                                v-model="choiceDevice"
                                                :options="mesureDimension"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        <b-form-group>
                                            <b-form-input
                                                type="text"
                                                id="basicInput"
                                        /></b-form-group>
                                    </div>
                                </td>
                                <td>-</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger rounded-circle"
                                    >
                                        <i class="las la-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- table footer -->
                    <span class="d-flex justify-content-between ml-1 mr-1">
                        <div>
                            Soit <strong>0</strong> colis, pour un poids total
                            de <strong>0,000 kg</strong> et un volume global de
                            <strong>0,00 m<sup>3</sup></strong>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="btn btn-success rounded"
                            >
                                Ajouter
                            </button>
                        </div>
                    </span>

                    <!-- options avancés -->
                    <div
                        class="btn d-flex justify-content-end pr-2 mt-2 mb-1"
                        @click="
                            optionAvanceeLogistique = !optionAvanceeLogistique
                        "
                    >
                        Options avancés
                    </div>
                    <div
                        class="d-flex justify-content-center mt-3"
                        v-if="optionAvanceeLogistique"
                    >
                        <div class="row">
                            <!-- left -->
                            <div
                                class="col-6 d-flex flex-column align-items-end"
                            >
                                <div class="d-flex flex-row">
                                    <strong> Conditionnement à l'achat</strong>
                                </div>

                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par pièce</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par carton</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par palette</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par conteneur</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>

                            <!-- right -->
                            <div
                                class="col-6 d-flex flex-column align-items-end"
                            >
                                <div class="d-flex flex-row">
                                    <strong> Conditionnement à la vente</strong>
                                </div>

                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par pièce</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par carton</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par palette</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <div class="mt-1 pr-1">Par conteneur</div>
                                    <div>
                                        <b-form-group
                                            ><b-form-input
                                                type="number"
                                                min="1"
                                                id="basicInput"
                                            />
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- infos complémentaires -->
                <div class="border border-dark rounded p-1 mt-3" id="infoSup">
                    <div><strong>INFORMATIONS COMPLEMENTAIRES</strong></div>
                    <hr />
                    <div class="d-flex flex-row">
                        <!-- inputs forms -->
                        <div class="col-8">
                            <div class="d-flex justify-content-between">
                                <div class="h4">Critères de déclinaisons</div>
                                <div class="">
                                    <b-form-group>
                                        <b-form-select
                                            v-model="selected"
                                            :options="declinaisons"
                                    /></b-form-group>
                                </div>
                            </div>
                            <div>
                                <strong
                                    >Cet article ne possède pas de critères de
                                    déclinaison</strong
                                >
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <div class="h4">Caractéristiques</div>
                                <div class="row">
                                    <span
                                        ><b-form-group>
                                            <b-form-select
                                                v-model="selected"
                                                :options="
                                                    caractéristiques
                                                " /></b-form-group
                                    ></span>
                                    <div class="btn btn-default">
                                        <i class="las la-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <strong
                                    >Aucune caractéristique n'est définit pour
                                    cet article</strong
                                >
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <div class="h4">Personnalisations</div>
                                <div class="row">
                                    <span
                                        ><b-form-group>
                                            <b-form-select
                                                v-model="selected"
                                                :options="
                                                    personnalisations
                                                " /></b-form-group
                                    ></span>
                                    <div class="btn btn-default">
                                        <i class="las la-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <strong
                                    >Aucune personnalisation n'est définit pour
                                    cet article</strong
                                >
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <div class="h4">Articles liés</div>
                                <div class="row">
                                    <span
                                        ><b-form-group>
                                            <b-form-select
                                                v-model="selected"
                                                :options="
                                                    options
                                                " /></b-form-group
                                    ></span>
                                    <div class="btn btn-default">
                                        <i class="las la-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-between border border-dark p-1"
                            >
                                <div class="h4">
                                    <strong class="m-auto">
                                        est associé à
                                    </strong>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-light">
                                        Supprimer
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-between border border-dark p-1"
                            >
                                <div class="h4">
                                    <strong class="m-auto">
                                        est un consommable de
                                    </strong>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-light">
                                        Supprimer
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div class="mt-2">Description courte</div>
                                <div class="mt-1">
                                    <b-form-group>
                                        <b-form-textarea
                                            id="textarea-default"
                                            placeholder="Description courte"
                                            rows="4"
                                    /></b-form-group>
                                </div>
                            </div>
                        </div>
                        <!-- import file & image -->
                        <div class="col-4">
                            <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
                            <div>Images associées</div>
                            <div class="dropbox">
                                <input
                                    type="file"
                                    multiple
                                    :name="uploadImageName"
                                    :disabled="isSaving"
                                    @change="
                                        filesChange(
                                            $event.target.name,
                                            $event.target.files
                                        );
                                        fileCount = $event.target.files.length;
                                    "
                                    accept="image/*"
                                    class="input-file"
                                />
                                <p v-if="isInitial">
                                    Glisser déposer vos fichiers pour
                                    commencer<br />
                                    ou clicker pour naviguer
                                </p>
                                <p v-if="isSaving">
                                    {{ fileCount }} fichiers ...
                                </p>
                            </div>
                            <hr />
                            <div>Fichiers associées</div>
                            <div class="dropbox">
                                <input
                                    type="file"
                                    multiple
                                    :name="uploadImageName"
                                    :disabled="isSaving"
                                    @change="
                                        filesChange(
                                            $event.target.name,
                                            $event.target.files
                                        );
                                        fileCount = $event.target.files.length;
                                    "
                                    accept="image/*"
                                    class="input-file"
                                />
                                <p v-if="isInitial">
                                    Glisser déposer vos fichiers pour
                                    commencer<br />
                                    ou clicker pour naviguer
                                </p>
                                <p v-if="isSaving">
                                    {{ fileCount }} fichiers ...
                                </p>
                            </div>
                            <!-- </form> -->
                        </div>
                    </div>
                    <!-- options avancé -->
                    <div
                        class="btn d-flex justify-content-end pr-2 mt-1 mb-1"
                        @click="
                            optionAvanceeInfosComp = !optionAvanceeInfosComp
                        "
                    >
                        Options avancés
                    </div>
                    <div class="mt-3" v-if="optionAvanceeInfosComp">
                        <div>
                            <div class="mt-2">Description longue</div>
                            <div class="mt-1">
                                <!-- <b-form-group> <b-form-textarea id="textarea-default" placeholder="Description courte" rows="4"/></b-form-group> -->

                                <VueEditor />
                            </div>
                            <div class="row mt-1">
                                <div class="mt-1 ml-1 m-2">
                                    Mot clés associés:
                                </div>
                                <div class="col-12">
                                    <b-form-group>
                                        <b-form-input
                                            type="text"
                                            id="basicInput"
                                        />
                                    </b-form-group>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <component :is="layout">
      <router-view />
    </component> -->
        <!-- <scroll-to-top v-if="enableScrollToTop" /> -->
    </div>
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from "bootstrap-vue";
import BuyNow from "@/components/BuyNow.vue";
import ScrollToTop from "@core/components/scroll-to-top/ScrollToTop.vue";
import CategorieNav from "@/components/CategorieNav.vue";

// This will be populated in `beforeCreate` hook
// import { $themeColors, $themeBreakpoints, $themeConfig } from '@themeConfig'
// import { provideToast } from 'vue-toastification/composition'
// import { watch } from '@vue/composition-api'
// import useAppConfig from '@core/app-config/useAppConfig'
// import { useWindowSize, useCssVar } from '@vueuse/core'
// import store from '@/store'
// import { codeBasic } from './code'

const LayoutVertical = () => import("@/layouts/vertical/LayoutVertical.vue");
const LayoutHorizontal = () =>
    import("@/layouts/horizontal/LayoutHorizontal.vue");
const LayoutFull = () => import("@/layouts/full/LayoutFull.vue");
import {
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BCardText,
    BFormTextarea,
} from "bootstrap-vue";

import BCardCode from "@core/components/b-card-code/BCardCode.vue";
// import flatPickr from 'vue-flatpickr-component'

import { VueEditor } from "vue2-editor";

export default {
    components: {
        CategorieNav,
        // Layouts
        LayoutHorizontal,
        LayoutVertical,
        LayoutFull,

        ScrollToTop,
        BuyNow,
        //flatPickr,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BCardCode,
        BFormTextarea,
        BFormSelect,
        BCardText,
        VueEditor,
        BDropdown,
        BDropdownItem,
        BDropdownDivider,
    },
    // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
    // Currently, router.currentRoute is not reactive and doesn't trigger any change
    data() {
        return {
            selected: null,
            type: "produit",
            options: [
                { value: null, text: " " },
                { value: "a", text: "This is First option" },
                { value: "b", text: "Simple Option" },
                {
                    value: { C: "3PO" },
                    text: "This is an option with object value",
                },
                { value: "d", text: "This one is disabled", disabled: true },
            ],
            optionsTVA: [
                { value: null, text: "TVA non applicable" },
                { value: null, text: "18%" },
            ],
            personnalisations: [
                { value: null, text: "Aucune personnalisation" },
            ],
            declinaisons: [{ value: null, text: "Aucune variante" }],
            caractéristiques: [{ value: null, text: "Domaine" }],
            regleCoutAchatActuel: [
                {
                    value: null,
                    text: "Coût d'achat le plus bas en cas de multiples fournisseurs",
                },
                {
                    value: null,
                    text: "Coût d'achat moyen en cas de multiples fournisseurs",
                },
                {
                    value: null,
                    text: "Coût d'achat le plus haut en cas de multiples fournisseurs",
                },
                { value: null, text: "Coût d'achat fournisseur favori" },
                { value: null, text: "Valeur arbitraire" },
            ],
            regleValorisationEnStock: [
                { value: null, text: "Coût moyen pondéré" },
                {
                    value: null,
                    text: "Coût d'achat moyen en cas de multiples fournisseurs",
                },
                { value: null, text: "Dernier coût d'achat" },
                { value: null, text: "Coût d'achat actuel" },
                { value: null, text: "Valeur arbitraire" },
            ],
            prixReference: [
                { value: null, text: "Tarif de base" },
                { value: null, text: "Prix public Conseillé" },
            ],
            mesurePoids: [
                { value: "kg", text: "kg" },
                { value: "g", text: "g" },
            ],
            mesureDimension: [
                { value: "m", text: "m" },
                { value: "cm", text: "cm" },
            ],
            devices: [
                { value: "XOF", text: "XOF" },
                { value: "USD", text: "USD" },
                { value: "EUR", text: "EUR" },
            ],
            taxes: [
                { value: "HT", text: "HT" },
                { value: "TTC", text: "TTC" },
            ],
            tracabilite: [
                { value: "aucune", text: "Aucune" },
                { value: "numeroSerie", text: "Numéro de Série" },
            ],
            choiceDevice: "",
            choiceTaxe: "",
            fournisseurs: [
                { value: null, text: "ALTOM" },
                { value: null, text: "Apple" },
            ],
            categories: [
                { value: null, text: "ERP" },
                { value: null, text: "Maintenance" },
                { value: null, text: "Réseau" },
                { value: null, text: "Web" },
            ],
            marques: [
                { value: null, text: "AMD" },
                { value: null, text: "Alcatel" },
                { value: null, text: "ANTEK" },
            ],
            valorisation: [
                { value: null, text: "Unité" },
                { value: null, text: "GigaOctet" },
                { value: null, text: "MegaOctet" },
                { value: null, text: "KiloOctet" },
                { value: null, text: "Mètre" },
            ],
            optionAvanceePrixAchat: true,
            optionAvanceeInfosPrincipales: true,
            optionAvanceeLogistique: true,
            optionAvanceeInfosComp: true,
            isInitial: true,
            isSaving: false,
            uploadImageName: [],
            fileCount: 0,
        };
    },
    computed: {
        layout() {
            if (this.$route.meta.layout === "full") return "layout-full";
            return `layout-${this.contentLayoutType}`;
        },
        contentLayoutType() {
            return this.$store.state.appConfig.layout.type;
        },
    },
    methods: {
        filesChange(name, file) {
            console.log(file);
            this.isInitial = false;
            this.isSaving = true;
        },
    },
};
</script>

<style scoped>
a {
    color: inherit;
}
.bg-default {
    background-color: #7367f0;
}
.color-default {
    color: #7367f0;
}
.back-gray {
    background-color: #ebecf0;
}
.navigation {
    /* padding: 25px; */
    /* margin: 15px; */
    color: white;
}
.h1 {
    color: white;
}
.vl {
    border-right: 1px solid black;
    height: auto;
}
.categorie-button {
    border: 1px solid #7367f0;
    border-radius: 10px;
    height: auto;
}
hr {
    border: 1px solid black;
}
/* input file */
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
}

.input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
}

.dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
}
</style>
