#include <iostream>
#include <fstream>
using namespace std;

int main() {
	ofstream outFile;
	outFile.open("pp.txt");
	double val;	int i;
	outFile << "life line positive positions" << endl;
	for(val = -11, i=1; val <= 8; val+=0.19, i++){
		outFile << ".pp-" << i << "{";
		outFile << "\tmargin-left: " << val << "vw; ";
		outFile << "}\n";
	}
	return 0;
}
