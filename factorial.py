import sys

if __name__ =="__main__":
    counter = []
    total = 1
    for i in range(int(sys.argv[1]),0,-1):
        print(i)
        total*=i
        counter.append(str(i))
    print(f'Hasil faktorial dari {sys.argv[1]}! = {'*'.join(counter)} = {total}')
    
