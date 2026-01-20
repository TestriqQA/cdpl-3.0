
import sys

def find_string_in_file(file_path, search_string):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            matches = 0
            for i, line in enumerate(f, 1):
                if search_string in line:
                    print(f"Line {i}: {line.strip()}")
                    matches += 1
                    # Print only first 5 matches to avoid spam
                    if matches >= 5: break 
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python find_string.py <file_path> <search_string>")
    else:
        find_string_in_file(sys.argv[1], sys.argv[2])
