function Car(marka, model, cena, kolor, opcja) {
	this.marka = marka; 
	this.model = model;
	this.cena = cena;
	this.kolor = kolor;
	this.opcja = opcja;

}
Car.prototype.printInfo = function() {
	console.log("Marka samochodu to " + this.marka + ", Model samochodu to " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + ", Wyposażenie " + this.opcja + ".");
}
var Maybach = new Car("Mercedes", "Maybach", 100000, "czarny", "full");
var SubaruImpreza = new Car("Subaru", "Impreza", 20000, "niebieski", "medium");
var Maluch = new Car("Fiat", "126p", 1000, "czerwony", "low");

Maybach.printInfo();
SubaruImpreza.printInfo();
Maluch.printInfo();