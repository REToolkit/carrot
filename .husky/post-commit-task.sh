#!/bin/sh

# Fetch the latest tag
latestTag="$(git describe --tags "$(git rev-list --tags --max-count=1)")"

# Break down the version number into its components
regex="([0-9]+).([0-9]+).([0-9]+)"
if expr "$latestTag" : "$regex" > /dev/null; then
major=$(expr "$latestTag" : 'v\([0-9]*\)')
minor=$(expr "$latestTag" : 'v[0-9]*\.\([0-9]*\)\.[0-9]*')
patch=$(echo "$latestTag" | sed -E 's/.*\.([0-9]+)$/\1/')
fi

# Increment the patch version
newPatch=$((patch + 1))
newTag="v$major.$minor.$newPatch"

# Create the new tag
git tag "$newTag"

# Optional: Push the new tag to the remote repository
git push origin "$newTag"

echo "New tag $newTag created and pushed"
