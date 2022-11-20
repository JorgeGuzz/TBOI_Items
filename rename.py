import os
# Function to rename multiple files
def main():
	i = 0
	path="./collectibles/"
	for filename in os.listdir(path):
		# my_dest ="new" + str(i) + ".png"
		my_source =path + filename

		file = filename.split('_')
		number = file[1].lstrip("0")

		my_dest =path + f'item_{number}.png'
		# # rename() function will
		# # rename all the files
		os.rename(my_source, my_dest)
		i += 1
# Driver Code
if __name__ == '__main__':
	# Calling main() function
	main()