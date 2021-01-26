import { IProductOfInterest } from '../../models/';

export const productsOfInterest: IProductOfInterest[] = [
  {
    name: 'Χρηματοδότηση / Πιστοδότηση',
    items: [],
    selected: true,
    notes: ''
  },
  {
    name: 'Λύσεις Εισπράξεων / Πληρωμών / Cash management / Καρτών / Μισθοδοσίας',
    items: [
      { name: 'Λύσεις Εισπράξεων', selected: false, notes: '' },
      { name: 'Λύσεις Πληρωμών', selected: false, notes: '' },
      { name: 'Κάρτες – debit', selected: false, notes: '' },
      { name: 'Κάρτες – credit', selected: false, notes: '' },
      { name: 'Κάρτες – prepaid, voucher, prepaid κτλ', selected: false, notes: '' },
      { name: 'Κάρτες – ΕΘΝΟdeposit', selected: false, notes: '' },
      { name: 'Κάρτες – αποδοχή καρτών physical POS, MOTO', selected: false, notes: '' },
      { name: 'Κάρτες – προεξοφλήσεις άτοκων δόσεων POS', selected: false, notes: '' },
      { name: 'Digital offering – e-commerce, channels APIs etc.', selected: false, notes: '' },
      { name: 'Άλλο', selected: false, notes: '' }
    ]
  },
  {
    name: 'Λύσεις Εμπορίου και Εφοδιαστικής Αλυσίδας',
    items: [
      { name: 'Υπηρεσίες Εισαγωγών-Εξαγωγών (Αξίες)', selected: false, notes: '' },
      { name: 'Λύσεις Trade Finance (Χρηματοδότηση Εισαγωγών - Χρηματοδότηση Εξαγωγών)', selected: false, notes: '' },
      { name: 'Factoring', selected: false, notes: '' },
      { name: 'Eγγυητικές επιστολές (LG)', selected: false, notes: '' },
      { name: 'Ενέγγυες Πιστώσεις (LC)', selected: false, notes: '' },
      { name: 'Προγράμματα στήριξης Διεθνών συναλλαγών (π.χ Πρόγραμμα Εξωστρέφεια)', selected: false, notes: '' },
      { name: 'Άλλο', selected: false, notes: '' }
    ]
  },
  {
    name: 'Λύσεις Διεθνών Αγορών και Αντιστάθμισης Κινδύνου',
    items: [
      { name: 'FX Hedging / FX PLATFORM (όταν μπει στην παραγωγή)', selected: false, notes: '' },
      { name: 'Rates Hedging / IRS, IR CAP ', selected: false, notes: '' },
      { name: 'Commodity Hedging (όλοι οι τύποι εμπορευμάτων)', selected: false, notes: '' },
      { name: 'Energy (Φυσικό Αέριο, EUAs, Ηλεκτρική Ενέργεια)', selected: false, notes: '' }
    ]
  }
];
