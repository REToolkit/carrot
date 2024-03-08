#!/bin/sh

# Check for non-minified JS file changes in the last commit
if git diff HEAD~1 HEAD --name-only | grep -vE '\.min\.js$' | grep -E '\.js$'; then
    echo "JavaScript source files were modified. Proceeding with version bump..."

    # Fetch the latest tag
    latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)

    # Break down the version number into its components
    regex="([0-9]+)\.([0-9]+)\.([0-9]+)"
    if [[ $latestTag =~ $regex ]]; then
        major="${BASH_REMATCH[1]}"
        minor="${BASH_REMATCH[2]}"
        patch="${BASH_REMATCH[3]}"
    fi

    # Increment the patch version
    newPatch=$((patch + 1))
    newTag="v$major.$minor.$newPatch"

    # Create the new tag
    git tag $newTag

    # Optional: Push the new tag to the remote repository
    git push origin $newTag

    echo "New tag $newTag created and pushed"
else
    echo "Only .min.js files or no JavaScript files were modified. Skipping version bump."
fi

# Now check and commit minified files if they are the only changes
if git diff --name-only | grep '\.min\.js$'; then
    git add .
    git commit -m 'chore: auto-commit minified files'
    echo "Minified files auto-committed."
else
    echo "No minified files to commit."
fi
